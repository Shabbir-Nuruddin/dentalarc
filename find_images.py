import os
import re

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                content = f.read()
                matches = re.findall(r'https://images\.pexels\.com[^\"]+', content)
                for m in matches:
                    print(os.path.join(root, file), m)
