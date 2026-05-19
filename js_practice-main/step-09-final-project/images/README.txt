SETUP — your 20 images
-----------------------

Drop 20 image files into this folder, named:

  img1.jpg
  img2.jpg
  img3.jpg
  ...
  img20.jpg

If your photos are PNGs instead of JPGs, either rename them to .jpg or
update the `src` values in the `images` array at the top of script.js
to end in ".png".


ADDING ALT TEXT (important!)
----------------------------

Open script.js and look at the `images` array at the top. Each entry
has BOTH a src and an alt. Replace the placeholder "Describe image N
here" text with a short description of what's actually in each photo.

Good alt text:
  - Describes what's in the picture, in a sentence or short phrase
  - Doesn't start with "Image of..." or "Picture of..." — screen readers
    already announce that
  - Is specific: "Black cat sleeping on a sunlit windowsill" beats
    "A cat"

Why each image needs alt text (and not just the slot):
  Because the gallery shuffles randomly, image 7 might end up in any of
  the 5 slots. If the alt text lived on the <img> tag, every reload
  would mismatch the description with the picture. Storing alt alongside
  src in the images array means each image's description travels with it.


QUICK PLACEHOLDER FOR TESTING (no real images yet)
---------------------------------------------------

If you want to see the gallery work before adding real photos, replace
the `images` array in script.js with something like this:

  const images = [];
  for (let i = 1; i <= 20; i++) {
    images.push({
      src: `https://picsum.photos/seed/img${i}/600/400`,
      alt: `Placeholder image ${i}`,
    });
  }

That fetches 20 random photos from picsum.photos. The alt text is
deliberately generic because the images are random — once you swap in
your real photos, write real descriptions.
