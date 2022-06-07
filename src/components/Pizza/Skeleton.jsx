import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={1}
        width={260}
        height={460}
        viewBox="0 0 260 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="511" y="295" rx="12" ry="12" width="52" height="13" />
        <rect x="-9" y="228" rx="0" ry="0" width="260" height="25" />
        <circle cx="112" cy="103" r="103" />
        <rect x="1" y="276" rx="20" ry="20" width="246" height="71" />
        <rect x="132" y="394" rx="3" ry="3" width="119" height="38" />
        <rect x="226" y="416" rx="0" ry="0" width="9" height="0" />
        <rect x="10" y="394" rx="7" ry="7" width="108" height="39" />
    </ContentLoader>
)

export default Skeleton