import os
from PIL import Image, ImageFile

# Allow Pillow to handle truncated images
ImageFile.LOAD_TRUNCATED_IMAGES = True

# Paths
folder_path = "images"
gifs_folder_path = "gifs"  # Path to the folder where the GIF will be saved

# Ensure the gifs folder exists
if not os.path.exists(gifs_folder_path):
    os.makedirs(gifs_folder_path)

# Now, create a GIF from all the images in the folder
image_files = sorted([f for f in os.listdir(folder_path) if f.endswith('.png')])

# Open all the images
images = []
for f in image_files:
    try:
        img = Image.open(os.path.join(folder_path, f))
        images.append(img)
    except Exception as e:
        print(f"Error loading {f}: {e}")

# If we have images to save, create the GIF
if images:
    gif_path = os.path.join(gifs_folder_path, "test.gif")

    # Save as GIF
    images[0].save(
        gif_path,
        save_all=True,
        append_images=images[1:],  # All images except the first one
        duration=500,  # Duration per frame in milliseconds
        loop=0  # Loop the GIF forever
    )

    print(f"GIF saved as {gif_path}")
else:
    print("No valid images found to create a GIF.")
