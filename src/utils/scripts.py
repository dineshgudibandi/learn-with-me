import os
import json

def read_folder_and_create_json(folder_path, folder):
    path = folder_path+folder
    try:
        filenames = [file for file in os.listdir(path) if os.path.isfile(os.path.join(path, file))]
        json_data = [{'description': filename.replace(".jpg", "").replace(".png",""), 'original': f"images/{folder}/{filename}",'thumbnail': f"images/{folder}/{filename}"} for filename in filenames]

        with open(f'../../public/jsons/{folder}.json', 'w') as json_file:
            json.dump(json_data, json_file, indent=2)

        print('JSON file created successfully.')
    except Exception as e:
        print('Error:', e)

folder_path = '../../public/images/'  # Replace with the actual folder path
folder = 'professions'
read_folder_and_create_json(folder_path, folder)
