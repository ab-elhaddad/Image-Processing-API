import sharp from 'sharp';

//Function to generate a new image with the requested aspects
export default function sharpFun(
  img: string,
  height: number,
  width: number
): void {
  sharp('imgs/' + img + '.jpg')
    .resize(+width, +height)
    .toFile(
      'imgs/' + img + '_' + width + '_' + height + '.jpg',
      (err: Error): void => {
        if (err) throw err;
      }
    );
}
