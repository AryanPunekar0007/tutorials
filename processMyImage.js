function processImage(img, cv) {
    let src = cv.imread(img);   //convert to opencv mat object, creating a grid

    let gray = new cv.Mat();    // a new mat object to hold the grayscale version

    cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY); //conversion to grayscale

    let dst = new cv.Mat();     // a new mat object to hold the final processed image

    cv.threshold(gray, dst, 80, 255, cv.THRESH_BINARY);

    // clean up
    src.delete();
    gray.delete();

    return dst; // return the processed image as a Mat object

}

module.exports = {processImage}; 
