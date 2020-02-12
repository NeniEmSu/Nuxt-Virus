<template lang="html">
  <div>
    <svg
      id="Loading"
      width="132px"
      height="58px"
      viewBox="0 0 132 58"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
    >
      <title>Loading</title>
      <desc>Loading...</desc>
      <defs />
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        sketch:type="MSPage"
      >
        <g id="Loading" sketch:type="MSArtboardGroup" fill="#545454">
          <circle id="dot1" sketch:type="MSShapeGroup" cx="25" cy="30" r="13">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.1"
            />
          </circle>
          <circle id="dot2" sketch:type="MSShapeGroup" cx="65" cy="30" r="13"><animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.2"
          />     </circle>
          <circle id="dot3" sketch:type="MSShapeGroup" cx="105" cy="30" r="13"><animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.3"
          />  </circle>
        </g>
      </g>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
svg {
  width: 90px;
}
@media screen and (max-width: 768px) {
  svg {
    width: 60px;
  }
}
</style>
