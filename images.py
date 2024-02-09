import os

# Folder path containing images
image_folder = "images"

# React component template
component_template = """import React from 'react';

const ImageGallery = () => {{
  const images = {image_list};

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
}}

export default ImageGallery;
"""

try:
    # Get a list of image file names
    image_files = [f for f in os.listdir(image_folder) if os.path.isfile(os.path.join(image_folder, f))]

    # Format the image list for React component
    image_list = [f'"{os.path.join(image_folder, image)}"' for image in image_files]

    # Replace the {image_list} placeholder in the template
    component_code = component_template.format(image_list=f"[{', '.join(image_list)}]")

    # Write the React component code to a file
    output_file_path = "ImageGallery.js"
    with open(output_file_path, "w") as output_file:
        output_file.write(component_code)

    print(f"React component file '{output_file_path}' generated successfully.")

except Exception as e:
    print(f"Error: {e}")
