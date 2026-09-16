import os
import re

files_to_check = []
for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            files_to_check.append(os.path.join(root, file))

images = ['/scraped_img_1.jpg', '/scraped_img_2.jpg', '/scraped_img_3.jpg', '/scraped_img_4.jpg', '/scraped_img_5.jpg', '/scraped_img_6.jpg']
img_idx = 0

for file in files_to_check:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    matches = re.findall(r'https://images\.pexels\.com[^\"]+', content)
    new_content = content
    for m in matches:
        new_content = new_content.replace(m, images[img_idx % len(images)])
        img_idx += 1
        
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print('Updated', file)
