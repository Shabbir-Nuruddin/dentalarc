from playwright.sync_api import sync_playwright
import time
import re
import requests
import os

url = 'https://www.google.com/maps/place/DENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha/@28.3950954,77.0305927,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgID_jqHKUg!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWltHe3B6xtbpisMXWuzLAoEwZcxzUoO9vK8pYR1pX8BGU4hl2nxKfzkU4YgjqpPgncuVO8Fqrbegu9U08ja-ifdtcl2tCYo6J_Fix_5-Wmx3PAfWc5u7ra-mYK5K3_dafQvrqs%3Dw86-h114-k-no!7i3075!8i4096!4m15!1m7!3m6!1s0x390d2308072eed75:0xdf3be68ea474d7bc!2sDENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha!8m2!3d28.395294!4d77.030255!16s%2Fg%2F11t9qzcjv5!3m6!1s0x390d2308072eed75:0xdf3be68ea474d7bc!8m2!3d28.395294!4d77.030255!10e5!16s%2Fg%2F11t9qzcjv5?authuser=0&hl=en&entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D'

print("Starting playwright...")
try:
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto(url)
        page.wait_for_timeout(10000)
        
        urls = []
        images = page.locator('img').all()
        for img in images:
            src = img.get_attribute('src')
            if src and ('googleusercontent.com' in src or 'ggpht.com' in src):
                urls.append(src)
                
        divs = page.locator('div').all()
        for div in divs:
            style = div.get_attribute('style')
            if style and 'background-image' in style:
                match = re.search(r'url\((.*?)\)', style)
                if match:
                    src = match.group(1).strip('\"\'')
                    if 'googleusercontent.com' in src or 'ggpht.com' in src:
                        urls.append(src)

        browser.close()
        
        urls = list(set(urls))
        print('Found', len(urls), 'URLs')
        
        # Download images
        count = 1
        for img_url in urls:
            if img_url.startswith('//'):
                img_url = 'https:' + img_url
            # Try to get highest resolution if it contains size params like w80, w200, etc.
            large_url = re.sub(r'=w\d+-h\d+-k-no', '=s1200', img_url)
            large_url = re.sub(r'=w\d+-h\d+-p-k-no', '=s1200', large_url)
            large_url = re.sub(r'=s\d+-p-k-no', '=s1200', large_url)
            
            res = requests.get(large_url)
            if res.status_code == 200 and len(res.content) > 10000: # Only save images > 10KB
                with open(f'public/scraped_img_{count}.jpg', 'wb') as f:
                    f.write(res.content)
                print(f'Saved scraped_img_{count}.jpg')
                count += 1
                if count > 8: # Limit to 8 good images
                    break
except Exception as e:
    print('Error:', e)
