import { Image } from "react-native"

import styles from "./imageviewer.style"

const ImageViewer = ({ placeholderImageSource }) => {
  return (
      <Image
          source={placeholderImageSource}
          style={styles.image}
      />
  )
}

export default ImageViewer