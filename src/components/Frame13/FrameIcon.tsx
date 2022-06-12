import { memo, SVGProps } from 'react';

const FrameIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M28.235 8.027c-6.58 0-11.934 5.353-11.934 11.933 0 3.72 1.685 7.154 4.624 9.433l.03.03a8.562 8.562 0 0 1 3.018 6.529v2.76c-.94 0-1.705.765-1.705 1.705 0 .94.765 1.705 1.705 1.705v2.131c0 .026.01.05.015.076a.415.415 0 0 0 .055.28l3.835 5.845a.426.426 0 0 0 .713 0l3.836-5.845a.415.415 0 0 0 .054-.28c.005-.026.016-.049.016-.076v-2.13a1.706 1.706 0 0 0 0-3.41v-2.761c0-2.517 1.1-4.897 3.016-6.53.011-.009.021-.019.03-.03a11.858 11.858 0 0 0 4.625-9.432c0-6.58-5.353-11.933-11.933-11.933Zm0 41.416-.89-1.354h1.779l-.89 1.354Zm1.448-2.207h-2.896l-1.599-2.435h6.093l-1.598 2.435Zm-4.858-3.41v-1.704h1.705v1.705h-1.705Zm2.557 0v-1.704h1.705v1.705h-1.705Zm4.262 0H29.94v-1.704h1.704v1.705Zm1.705-3.409c0 .47-.382.853-.852.853h-8.524a.853.853 0 0 1 0-1.705h8.524c.47 0 .852.383.852.852Zm-8.68-17.13c.424-.094.768-.262 1.159-.466l.285-.148c.108.051.215.107.322.161.484.25 1.032.532 1.78.535h.011c.744 0 1.29-.283 1.772-.533.112-.058.222-.115.334-.169.103.046.207.096.312.146.355.169.742.344 1.15.452a12.77 12.77 0 0 0-2.706 7.848v7.599h-1.705v-7.567a12.78 12.78 0 0 0-2.715-7.857Zm10.301 5.471a.408.408 0 0 0-.062.06 9.41 9.41 0 0 0-3.248 6.83c-.005.027-.016.052-.016.081v2.984H29.94v-7.6c0-2.884 1.042-5.668 2.934-7.839a.426.426 0 0 0-.041-.602c-.017-.013-.036-.018-.053-.03a.425.425 0 0 0-.302-.125c-.474 0-.98-.24-1.469-.473-.176-.083-.348-.165-.515-.235a.42.42 0 0 0-.329 0c-.19.08-.375.175-.56.27-.434.226-.843.438-1.38.438h-.007c-.544-.002-.956-.215-1.393-.44a7.714 7.714 0 0 0-.558-.268.425.425 0 0 0-.35.01c-.178.087-.338.17-.484.247-.539.282-.864.452-1.478.452a.42.42 0 0 0-.4.3.423.423 0 0 0 .042.492 11.929 11.929 0 0 1 2.933 7.837v7.566h-1.705V35.73c0-.029-.01-.054-.016-.082a9.41 9.41 0 0 0-3.247-6.827.384.384 0 0 0-.063-.06 11.01 11.01 0 0 1-4.345-8.8c0-6.11 4.97-11.081 11.08-11.081s11.082 4.971 11.082 11.08a11.004 11.004 0 0 1-4.346 8.798Z'
      fill='#000'
    />
    <path
      d='M45.283 20.205c0-1.9-1.868-3.659-5.17-4.926 1.449-3.254 1.525-5.78.176-7.129-1.48-1.48-4.461-1.237-8.174.666a.426.426 0 1 0 .39.759c3.312-1.698 6-2.006 7.181-.822 1.075 1.074.925 3.34-.376 6.238-.149-.05-.294-.1-.448-.15a.426.426 0 1 0-.255.814c.115.036.223.073.334.11-1.404 2.801-3.686 5.856-6.488 8.658a42.613 42.613 0 0 1-1.776 1.67c-.8.046-1.613.078-2.442.078-.829 0-1.64-.032-2.44-.079a41.955 41.955 0 0 1-1.78-1.669c-2.83-2.829-5.097-5.88-6.486-8.658.11-.037.217-.075.33-.11a.426.426 0 1 0-.255-.813c-.155.048-.302.1-.452.15a16.58 16.58 0 0 1-.53-1.318c-.793-2.277-.736-4.025.16-4.921 1.174-1.175 3.721-.91 6.989.724a.426.426 0 1 0 .38-.763c-3.671-1.836-6.5-2.036-7.972-.564-1.156 1.157-1.282 3.164-.363 5.805.151.433.33.876.53 1.328-3.296 1.267-5.16 3.025-5.16 4.922 0 1.955 1.966 3.69 5.159 4.923-1.44 3.23-1.512 5.785-.166 7.131.646.646 1.563.968 2.703.968 1.275 0 2.828-.403 4.59-1.206 1.53-.699 3.141-1.665 4.758-2.843 3.541 2.586 6.915 4.043 9.354 4.043 1.125 0 2.052-.31 2.704-.962 1.346-1.346 1.273-3.901-.166-7.13 3.195-1.234 5.161-2.969 5.161-4.924Zm-17.048 6.819c.472 0 .934-.013 1.395-.027-.462.384-.925.752-1.389 1.103a37.413 37.413 0 0 1-1.394-1.104c.46.015.919.028 1.388.028Zm-16.195-6.82c0-1.517 1.73-3.031 4.681-4.153 1.43 2.888 3.77 6.054 6.692 8.975.33.329.661.65.993.961-2.575-.24-4.923-.713-6.868-1.355.089-.176.165-.347.26-.527a.427.427 0 1 0-.75-.402c-.12.222-.212.433-.32.65-2.88-1.083-4.688-2.554-4.688-4.148Zm11.08 11.04c-2.945 1.344-5.256 1.495-6.337.413-1.076-1.077-.926-3.359.368-6.237 2.298.778 5.136 1.307 8.288 1.507a39.994 39.994 0 0 0 2.076 1.71c-1.496 1.073-2.983 1.963-4.396 2.608Zm16.567.413c-1.692 1.692-6.06.313-10.732-3.029a39.73 39.73 0 0 0 2.067-1.7c3.156-.2 5.997-.73 8.297-1.508 1.292 2.878 1.444 5.16.368 6.236Zm.056-7.304c-.108-.217-.2-.428-.32-.65a.426.426 0 0 0-.75.402c.095.18.171.35.26.527-1.948.642-4.297 1.115-6.875 1.355.335-.314.67-.633.999-.962 2.895-2.896 5.254-6.066 6.694-8.974 2.951 1.122 4.679 2.635 4.679 4.152 0 1.596-1.807 3.067-4.687 4.15Z'
      fill='#000'
    />
    <path d='M17.165 9.356a1.279 1.279 0 1 0 0-2.558 1.279 1.279 0 0 0 0 2.558Z' fill='#F1AD00' />
    <path
      d='M17.164 9.782c-.94 0-1.705-.765-1.705-1.705 0-.94.765-1.705 1.705-1.705.94 0 1.705.765 1.705 1.705 0 .94-.765 1.705-1.705 1.705Zm0-2.557a.853.853 0 0 0 0 1.704.853.853 0 0 0 0-1.704ZM43.589 23.846a1.279 1.279 0 1 0 0-2.557 1.279 1.279 0 0 0 0 2.557Z'
      fill='#F1AD00'
    />
    <path
      d='M43.588 24.272c-.94 0-1.705-.764-1.705-1.704s.765-1.705 1.705-1.705c.94 0 1.705.764 1.705 1.705 0 .94-.766 1.704-1.705 1.704Zm0-2.557a.853.853 0 0 0 0 1.705.854.854 0 0 0 0-1.705ZM17.165 33.222a1.279 1.279 0 1 0 0-2.557 1.279 1.279 0 0 0 0 2.557Z'
      fill='#F1AD00'
    />
    <path
      d='M17.164 33.649c-.94 0-1.705-.765-1.705-1.705 0-.94.765-1.705 1.705-1.705.94 0 1.705.765 1.705 1.705 0 .94-.765 1.705-1.705 1.705Zm0-2.558a.853.853 0 0 0 0 1.705.853.853 0 0 0 0-1.704ZM28.235 7.174a.426.426 0 1 0 0-.852.426.426 0 0 0 0 .852ZM41.447 20.386a.426.426 0 1 0 0-.852.426.426 0 0 0 0 .852ZM15.023 20.386a.426.426 0 1 0 0-.852.426.426 0 0 0 0 .852ZM37.88 10.92a.426.426 0 1 0-.603-.602.426.426 0 0 0 .603.603ZM19.194 29.602a.426.426 0 1 0-.603-.603.426.426 0 0 0 .603.603ZM37.879 29.604a.426.426 0 1 0-.603-.603.426.426 0 0 0 .603.602ZM19.195 10.92a.426.426 0 1 0-.603-.604.426.426 0 0 0 .603.603ZM23.341 8.148a.426.426 0 1 0-.326-.787.426.426 0 0 0 .326.787ZM33.684 7.917a.426.426 0 1 0-.787-.326.426.426 0 0 0 .788.326ZM25.741 7.42a.426.426 0 1 0-.166-.837.426.426 0 0 0 .166.836ZM41.277 17.8a.426.426 0 1 0-.167-.837.426.426 0 0 0 .167.836ZM15.36 22.956a.426.426 0 1 0-.166-.835.426.426 0 0 0 .166.835ZM35.93 9.213a.426.426 0 1 0-.71-.473.426.426 0 0 0 .71.473ZM21.249 31.18a.426.426 0 1 0-.709-.473.426.426 0 0 0 .709.474ZM39.573 27.536a.426.426 0 1 0-.709-.474.426.426 0 0 0 .709.474ZM17.605 12.856a.426.426 0 1 0-.71-.474.426.426 0 0 0 .71.474ZM21.131 9.329a.426.426 0 1 0-.473-.709.426.426 0 0 0 .473.709ZM35.811 31.302a.426.426 0 1 0-.473-.709.426.426 0 0 0 .473.709ZM39.456 12.977a.426.426 0 1 0-.473-.71.426.426 0 0 0 .473.71ZM17.486 27.654a.426.426 0 1 0-.474-.708.426.426 0 0 0 .474.708ZM31.23 7.084a.426.426 0 1 0-.836-.166.426.426 0 0 0 .836.166ZM41.612 22.621a.426.426 0 1 0-.835-.166.426.426 0 0 0 .835.166ZM15.694 17.464a.426.426 0 1 0-.836-.166.426.426 0 0 0 .836.166Z'
      fill='#F1AD00'
    />
  </svg>
);

const Memo = memo(FrameIcon);
export { Memo as FrameIcon };
