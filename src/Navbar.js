import React, { Component } from "react";

class HogDetails extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="navbar">
        <div className="logo">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="1144.286"
            // height="414.286"
            version="1.0"
            viewBox="-100 0 1400 380"
          >
            <path
              d="M214.668 335.245c-32.335-5.418-63.787-25.009-83.998-52.32-7.743-10.463-16.978-28.987-20.012-40.141-1.26-4.635-2.457-8.99-2.658-9.677-.274-.937-4.634-1.25-17.397-1.25H73.57v-55h33.923l1.073-4.25c11.262-44.615 44.715-80.603 88.104-94.782 26.526-8.669 58.174-8.453 84.477.575 41.39 14.207 75.374 50.744 85.29 91.7l1.633 6.743 17.25.007 17.25.007v55h-17.5c-15.797 0-17.5.165-17.5 1.699 0 3.21-5.16 18.614-9.076 27.088-5.846 12.653-14.175 24.509-25.203 35.875-20.504 21.134-44.51 33.932-72.647 38.73-11.568 1.973-34.19 1.971-45.977-.004zm32.93-45.449c30.273-3.79 57.751-24.008 69.06-50.813l2.796-6.626-81.102-.256c-44.606-.14-81.313-.045-81.57.213-.258.257 1.177 3.932 3.188 8.167 12.975 27.322 37.905 45.39 68.073 49.334 8.797 1.15 10.226 1.15 19.555-.019zm71.973-113.46c0-.288-1.286-3.36-2.859-6.83-10.963-24.176-31.856-41.851-57.64-48.76-11.395-3.054-30.783-3.066-42-.025-25.163 6.82-44.82 22.77-56.243 45.636-1.648 3.3-3.31 7.013-3.695 8.25l-.697 2.25h81.567c44.862 0 81.567-.235 81.567-.522zm233.5 131.652c-9.617-2.523-18.211-10.1-21.581-19.029-2.759-7.31-2.328-18.505.957-24.893 2.976-5.786 9.322-11.95 14.975-14.545 6.504-2.985 18.783-2.991 25.272-.012 6.148 2.823 12.292 8.507 14.804 13.697 10.001 20.66-2.7 43.61-24.975 45.129-3.548.242-7.802.086-9.452-.347zm13.816-14.256c9.253-4.765 12.68-15.771 7.682-24.666-4.196-7.466-14.389-10.644-21.817-6.802-8.282 4.283-11.66 15.967-6.957 24.064 3.303 5.685 7.968 8.53 13.99 8.53 2.705 0 5.9-.507 7.102-1.126zm191.635 13.763c-13.217-3.565-22.05-15.165-22.185-29.138-.075-7.714 1.478-13.156 5.235-18.342 11.371-15.697 34.029-17.465 47.408-3.699 10.233 10.529 11.51 27.488 2.965 39.375-7.555 10.511-20.832 15.2-33.423 11.804zm17.813-15.297c13.169-9.765 6.908-31.345-9.165-31.588-9.445-.143-16.83 7.364-16.83 17.108 0 6.879 3.275 12.273 9.731 16.03 3.082 1.793 13.035.845 16.264-1.55zm119.667 14.841c-8.201-2.835-12.77-7.198-16.636-15.884-2.863-6.437-3.047-18.6-.395-26.24 2.6-7.493 9.554-14.373 16.66-16.483 8.206-2.437 12.92-2.034 22.19 1.897 1.614.684 1.75-.242 1.75-11.865v-12.607h14v81h-6.5c-5.904 0-6.5-.19-6.5-2.068 0-2.054-.019-2.055-2.75-.153-6.441 4.486-13.534 5.268-21.819 2.403zm20.102-12.63l3.467-1.45V262.908l-2.95-1.525c-4.607-2.382-14.046-2.003-18.098.728-10.436 7.033-9.912 25.315.907 31.589 4.329 2.51 11.62 2.82 16.674.708zm52.967 13.112c-13.682-4.541-22.5-16.14-22.5-29.597 0-8.906 2.574-14.826 9.425-21.676 7.59-7.592 14.053-10.009 24.217-9.06 16.353 1.527 27.76 14.129 27.76 30.67 0 8.791-2.164 14.517-7.878 20.842-7.234 8.006-21.369 12.025-31.024 8.82zm17.022-15.124c3.184-1.865 4.74-3.719 6.44-7.674 2.455-5.704 2.333-9.336-.514-15.334-4.12-8.683-16.387-11.597-24.37-5.79-3.442 2.504-7.083 9.841-7.056 14.22.043 6.828 4.887 14.028 10.978 16.317 3.822 1.435 10.462.64 14.522-1.739zm-495.522-9.54v-24h-9v-11H490.384l.705-5.25c.857-6.39 2.859-11.457 5.734-14.518 3.324-3.538 11.721-5.575 19.537-4.738 9.295.996 9.211.93 9.211 7.23 0 5.23-.114 5.478-2.25 4.892-11.358-3.115-16.927-.463-18.426 8.778l-.585 3.606H524.57v11h-20v48h-14v-24zm114-5.5v-29.5h13v6.094l3.899-3.132c3.1-2.492 5.147-3.246 10-3.686l6.101-.554v6.546c0 6.057-.149 6.506-2.004 6.02-2.797-.73-10.8 1.436-14.175 3.84l-2.82 2.008v41.864h-14v-29.5zm74-11v-40.5h16v67h34v14h-50v-40.5zm133 11v-29.5h6c5.734 0 6 .111 6 2.5 0 3.073.067 3.073 4.52.052 9.426-6.397 26.066-3.669 31.962 5.241 3.592 5.427 4.518 12.164 4.518 32.844v18.363h-14v-18.532c0-19.937-.73-23.764-5.116-26.837-3.46-2.423-11.504-2.096-16.384.667l-4 2.264-.27 21.22-.27 21.218h-12.96v-29.5zm210 0v-29.5h6.5c6.217 0 6.5.106 6.5 2.43v2.43l4.471-2.5c9.644-5.39 23.216-3.77 29.84 3.561 1.956 2.166 4.034 5.657 4.617 7.758.59 2.126 1.064 13.03 1.067 24.571l.005 20.75h-12.762l-.426-19.25c-.465-20.995-1.236-24.255-6.284-26.555-3.977-1.812-10.401-1.434-15.212.894l-4.316 2.09v42.821h-14v-29.5zm-234-111.5v-41h6.5c5.834 0 6.5.205 6.5 2 0 2.492.06 2.489 4.693-.25 5.308-3.136 16.996-3.163 22.87-.052 5.935 3.143 11.195 9.038 13.455 15.079 2.72 7.269 2.698 19.237-.05 26.578-2.4 6.419-9.55 13.66-15.523 15.725-5.72 1.978-17.195 1.77-21.195-.382l-3.25-1.75v25.052h-14v-41zm34.88 5.24c4.963-3.705 6.537-6.928 6.95-14.228.314-5.554-.026-7.787-1.72-11.284-3.75-7.746-13.794-10.976-22.642-7.279l-3.468 1.45v30.887l3.75 1.616c4.762 2.052 13.631 1.451 17.13-1.161zm-213.88 13.65c-10.143-3.034-14.756-14.564-9.867-24.664 3.716-7.677 13.781-12.922 28.16-14.674 5.338-.651 5.744-.877 5.17-2.88-.97-3.377-5.224-6.661-8.768-6.769-7.432-.225-11.515.384-16.815 2.508l-5.62 2.252 1.334-5.581c.734-3.07 1.351-6.086 1.37-6.702.064-1.997 9.304-3.88 19.036-3.88 8.29 0 10.062.318 13.912 2.5 8.831 5.005 10.036 9.643 10.068 38.75l.02 18.25h-6.5c-5.92 0-6.5-.186-6.5-2.083 0-1.146-.337-1.91-.75-1.7-10.1 5.177-17.68 6.637-24.25 4.672zm19.474-13.09l4.526-2.198v-14.874l-4.53.621c-6.989.958-14.349 4.517-16.018 7.746-2.027 3.918-1.824 5.623 1.003 8.45 3.162 3.163 8.837 3.26 15.019.256zm115.703 13.192c-2.378-.502-6.766-2.03-9.75-3.397l-5.427-2.484v-6.639c0-3.651.338-6.489.75-6.305.413.183 3.88 1.862 7.704 3.731 9.184 4.489 19.168 5.48 22.421 2.228 4.525-4.525 1.737-7.77-10.001-11.64-4.606-1.52-10.004-3.58-11.998-4.58-14.612-7.33-12.156-25.861 4.052-30.573 6.932-2.015 16.969-1.293 23.985 1.725l5.087 2.188v12.788l-5.23-2.65c-9.786-4.96-22.77-4.113-22.77 1.484 0 2.952 2.905 4.689 13.471 8.055 15.587 4.966 20.206 9.901 19.316 20.64-.532 6.416-3.4 10.588-9.216 13.403-5.07 2.454-15.78 3.423-22.394 2.026zm133.323.078c-9.514-2.302-18.139-9.845-21.53-18.831-2.811-7.45-2.408-18.586.906-25.03 2.976-5.786 9.322-11.95 14.975-14.545 7.243-3.325 18.862-3.042 26.364.642 13.532 6.645 20.23 22.467 15.787 37.293-4.386 14.64-21.328 24.141-36.502 20.47zm15.579-15.344c10.926-7.363 10.73-23.53-.36-29.764-6.848-3.849-15.04-2.567-20.402 3.193-6.958 7.474-5.174 20.655 3.597 26.566 4.662 3.142 12.507 3.144 17.165.005zm96.421 15.345c-6.62-1.597-11.67-6.42-13.456-12.852-.568-2.045-1.035-11.031-1.038-19.969l-.006-16.25h-10v-11h10v-14h14v14h21v11h-21v16.546c0 16.233.047 16.591 2.455 19 2.924 2.924 9.498 3.336 15.2.954 1.974-.825 3.76-1.5 3.968-1.5.207 0 .377 2.863.377 6.362v6.362l-5.666 1.138c-6.232 1.251-11.241 1.318-15.834.21zm-482.5-34.57v-33.5h-24v-14h63v14h-24v67h-15v-33.5zm51 4v-29.5h6c6 0 6 0 6 3 0 3.545.992 3.783 3.595.861 2.686-3.014 7.58-4.862 12.873-4.862h4.532l-.006 6.25-.006 6.25-5.357.075c-3.93.055-6.594.8-9.994 2.792l-4.637 2.717v41.916h-13v-29.5zm105 0v-29.5h6.5c6.296 0 6.5.08 6.5 2.541v2.542l4.75-2.792c4.16-2.445 5.745-2.786 12.75-2.743 8.732.054 12.121 1.294 16.697 6.112 5.292 5.571 5.803 8.373 5.803 31.807v21.532h-12.816l-.358-19.25c-.391-21.021-1.147-24.208-6.298-26.555-3.977-1.812-10.401-1.434-15.212.894l-4.316 2.09v42.821h-14v-29.5zm266 0v-29.5h13v6.093l3.899-3.132c3.1-2.492 5.147-3.246 10-3.686l6.101-.554v6.546c0 6.057-.149 6.506-2.004 6.02-2.797-.73-10.8 1.436-14.175 3.84l-2.82 2.008v41.864h-14v-29.5z"
              fill="#ffffff"
            />
          </svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-110 -15 700 160">
            <path
              //   fill="#ffffff"
              d="M188.1 93h245.4v2.7H188.1zM81.8 0C45.2 0 15.4 29.7 15.4 66.4s29.7 66.4 66.4 66.4 66.4-29.7 66.4-66.4S118.5 0 81.8 0m42.9 66.4c0 23.7-19.2 42.8-42.9 42.8-23.6 0-42.8-19.1-42.8-42.8 0-23.7 19.2-42.8 42.8-42.8 23.7 0 42.9 19.1 42.9 42.8"
            />
            <path
              //   fill="#ffffff"
              d="M0 53h163.4v26.9H0zM188.1 121.7v-13.5h8.4v2.7h-5.3v2.3h4.2v2.7h-4.2v3h5.8v2.8zM206 121.7h-3.4l-4.8-13.5h3.5l3 9.1 3-9.1h3.5zM212.3 121.7v-13.5h8.4v2.7h-5.3v2.3h4.2v2.7h-4.2v3h5.7v2.8zM226 110.7v3.2h1.1c.6 0 1.1-.2 1.4-.5.3-.3.5-.7.5-1.2 0-.4-.2-.8-.5-1.1-.3-.3-.8-.4-1.3-.4H226zm3.9 11l-3.4-5.1h-.5v5.1h-3.2v-13.6h4.6c1.5 0 2.7.4 3.5 1.1.8.7 1.3 1.7 1.3 3 0 .9-.2 1.6-.7 2.2-.4.6-1 1.1-1.8 1.4l3.9 5.8h-3.7zM241.9 116.2v5.5h-3.2v-5.5l-4.6-8h3.6l2.6 5 2.6-5h3.6zM261.1 117.4c0 1.4-.4 2.5-1.2 3.4-.8.8-1.9 1.2-3.4 1.2-.8 0-1.6-.2-2.2-.6-.6-.4-1.1-1-1.6-1.9l2.5-1.4c.3.7.8 1 1.3 1 .9 0 1.4-.7 1.4-2v-9h3.2v9.3zM270.1 119.1c1.2 0 2.1-.4 2.9-1.2.8-.8 1.2-1.8 1.2-3s-.4-2.2-1.2-3c-.8-.8-1.7-1.2-2.9-1.2-1.1 0-2.1.4-2.9 1.2-.8.8-1.2 1.8-1.2 3s.4 2.2 1.2 3c.8.8 1.7 1.2 2.9 1.2m0 2.9c-2 0-3.8-.7-5.1-2-1.4-1.4-2.1-3-2.1-5s.7-3.6 2.1-5c1.4-1.3 3.1-2 5.1-2 2.1 0 3.8.7 5.2 2 1.4 1.3 2.1 3 2.1 5s-.7 3.7-2.1 5c-1.5 1.3-3.2 2-5.2 2M291.4 115.4c0 1.3-.2 2.3-.4 3-.3.7-.7 1.3-1.2 1.9-.5.6-1.2 1-2 1.2-.8.3-1.7.4-2.7.4-.9 0-1.8-.1-2.5-.4-.7-.3-1.4-.7-1.9-1.3-.5-.6-.9-1.2-1.2-1.9-.3-.7-.4-1.7-.4-3V108h3.2v7.2c0 1.3.3 2.2.8 2.9.5.6 1.2 1 2.2 1 2 0 3-1.3 3-3.8v-7.2h3.2v7.3zM296.7 110.7v3.2h1.1c.6 0 1-.2 1.4-.5.3-.3.5-.7.5-1.2 0-.4-.2-.8-.5-1.1-.3-.3-.8-.4-1.3-.4h-1.2zm4 11l-3.4-5.1h-.6v5.1h-3.2v-13.6h4.6c1.5 0 2.7.4 3.5 1.1.8.7 1.3 1.7 1.3 3 0 .9-.2 1.6-.6 2.2-.4.6-1 1.1-1.8 1.4l3.9 5.8h-3.7zM314.8 121.7l-6-8.4v8.4h-3.2v-13.5h3.3l6 8.5v-8.5h3.2v13.5zM320.3 121.7v-13.5h8.5v2.7h-5.3v2.3h4.2v2.7h-4.2v3h5.7v2.8zM337.8 116.2v5.5h-3.1v-5.5l-4.7-8h3.7l2.6 5 2.6-5h3.6zM360.4 121.7v-8.4l-3.8 4.8-3.7-4.8v8.4h-3.2v-13.5h3l3.9 5.1 3.8-5.1h3.2v13.5zM371.6 111.9l-1.5 4.6h3l-1.5-4.6zm3.3 9.8l-.8-2.5h-4.8l-.8 2.5H365l5-13.6h3.2l5.1 13.6h-3.4zM385.9 111v10.7h-3.2V111h-3.6v-2.8h10.5v2.8zM397.2 111v10.7h-3.1V111h-3.7v-2.8h10.5v2.8zM402.4 121.7v-13.5h8.5v2.7h-5.3v2.3h4.2v2.7h-4.2v3h5.7v2.8zM416.2 110.7v3.2h1.1c.6 0 1-.2 1.4-.5.3-.3.5-.7.5-1.2 0-.4-.2-.8-.5-1.1-.3-.3-.7-.4-1.3-.4h-1.2zm3.9 11l-3.4-5.1h-.6v5.1H413v-13.6h4.6c1.5 0 2.7.4 3.5 1.1.8.7 1.2 1.7 1.2 3 0 .9-.2 1.6-.6 2.2-.4.6-1 1.1-1.8 1.4l3.9 5.8h-3.7zM424.5 119l2.4-1.4c.5 1.1 1.2 1.6 2.3 1.6.6 0 1-.1 1.3-.4.3-.2.5-.6.5-1s-.1-.6-.4-.9c-.3-.3-.9-.6-2.1-1.1-1.3-.6-2.2-1.2-2.7-1.8-.5-.6-.7-1.4-.7-2.3 0-1.1.4-2 1.3-2.8.8-.8 1.9-1.1 3.2-1.1 1.9 0 3.2.7 4.1 2.2l-2.2 1.4c-.4-.7-1-1.1-1.9-1.1-.4 0-.8.1-1 .3-.3.2-.4.5-.4.8 0 .3.2.6.4.9.3.2.9.6 1.8 1 1.4.6 2.3 1.3 2.9 1.9.6.6.8 1.5.8 2.4 0 1.2-.5 2.2-1.5 3-1 .8-2.2 1.2-3.6 1.2-1.9.2-3.5-.8-4.5-2.8M201.5 16.3v21h-6.2v-21h-7.2v-5.6h20.6v5.6zM218 15.7V22h2.2c1.1 0 2.1-.3 2.7-.9.7-.6 1-1.4 1-2.3 0-.9-.3-1.6-1-2.2-.6-.6-1.5-.9-2.6-.9H218zm7.8 21.6l-6.6-10.1H218v10.1h-6.3V10.7h9.1c3 0 5.3.7 6.9 2.2 1.6 1.4 2.5 3.4 2.5 5.9 0 1.7-.4 3.1-1.3 4.4-.8 1.2-2.1 2.2-3.6 2.8l7.6 11.4h-7.1zM246.9 18l-3 9.1h6l-3-9.1zm6.5 19.3l-1.6-4.8h-9.5l-1.6 4.8h-6.8l9.8-26.6h6.3l10.1 26.6h-6.7zM280.9 37.3l-11.7-16.4v16.4H263V10.7h6.3l11.9 16.7V10.7h6.2v26.6zM290.8 32.1l4.7-2.8c.9 2.2 2.4 3.2 4.4 3.2 1.1 0 1.9-.2 2.6-.7.6-.5 1-1.1 1-1.9 0-.7-.2-1.3-.7-1.8-.5-.5-1.8-1.3-4.1-2.3-2.6-1.1-4.3-2.3-5.3-3.5-.9-1.2-1.4-2.7-1.4-4.4 0-2.1.8-4 2.5-5.4 1.7-1.5 3.8-2.2 6.3-2.2 3.7 0 6.4 1.5 8 4.4l-4.3 2.8c-.8-1.4-2.1-2.1-3.7-2.1-.8 0-1.5.2-2 .6-.5.4-.8.9-.8 1.6 0 .7.3 1.2.8 1.7s1.7 1.1 3.5 2c2.7 1.3 4.6 2.5 5.7 3.8 1.1 1.3 1.7 2.9 1.7 4.8 0 2.4-1 4.3-2.8 5.8-1.9 1.5-4.2 2.3-7 2.3-4.2-.2-7.2-2.1-9.1-5.9M319.5 15.8v7.7h2c1.5 0 2.6-.3 3.4-1 .8-.7 1.2-1.6 1.2-2.8 0-1.3-.4-2.2-1.2-2.9-.8-.7-1.9-1-3.4-1h-2zm0 12.8v8.7h-6.3V10.7h8.9c3.2 0 5.7.8 7.5 2.4 1.8 1.6 2.7 3.8 2.7 6.5 0 2.8-1 5-2.8 6.6-1.9 1.6-4.4 2.4-7.6 2.4h-2.4zM349 32.2c2.3 0 4.1-.8 5.7-2.4 1.5-1.6 2.3-3.5 2.3-5.9 0-2.3-.8-4.3-2.3-5.9-1.5-1.6-3.4-2.3-5.7-2.3-2.3 0-4.1.8-5.7 2.4-1.5 1.6-2.3 3.5-2.3 5.8s.8 4.3 2.3 5.9c1.6 1.6 3.5 2.4 5.7 2.4m0 5.6c-4 0-7.4-1.3-10.1-4-2.7-2.7-4.1-5.9-4.1-9.8 0-3.9 1.3-7.2 4.1-9.8 2.7-2.7 6.1-4 10.1-4s7.4 1.3 10.1 4c2.7 2.6 4.1 5.9 4.1 9.8 0 3.9-1.4 7.2-4.1 9.9-2.7 2.6-6 3.9-10.1 3.9M373 15.7V22h2.2c1.1 0 2.1-.3 2.7-.9.7-.6 1-1.4 1-2.3 0-.9-.3-1.6-1-2.2-.6-.6-1.5-.9-2.6-.9H373zm7.8 21.6l-6.6-10.1H373v10.1h-6.3V10.7h9.1c3 0 5.3.7 6.9 2.2 1.6 1.4 2.5 3.4 2.5 5.9 0 1.7-.4 3.1-1.3 4.4-.8 1.2-2 2.2-3.6 2.8l7.6 11.4h-7.1zM402.6 16.3v21h-6.3v-21h-7.2v-5.6h20.7v5.6zM194.3 58.3v4.6h8.4v5.4h-8.4v11.3h-6.2V53h16.8v5.3zM221.2 74.5c2.3 0 4.1-.8 5.7-2.4 1.5-1.6 2.3-3.5 2.3-5.9 0-2.3-.8-4.3-2.3-5.8-1.5-1.6-3.4-2.3-5.7-2.3-2.3 0-4.1.8-5.7 2.4-1.5 1.6-2.3 3.5-2.3 5.8s.8 4.3 2.3 5.8c1.6 1.6 3.5 2.4 5.7 2.4m0 5.6c-4 0-7.4-1.3-10.1-4-2.7-2.7-4.1-5.9-4.1-9.8 0-3.9 1.3-7.2 4.1-9.8 2.7-2.7 6.1-4 10.1-4s7.4 1.3 10.1 4c2.7 2.6 4.1 5.9 4.1 9.8 0 3.9-1.4 7.2-4.1 9.9-2.7 2.6-6.1 3.9-10.1 3.9M245.2 58v6.3h2.2c1.1 0 2.1-.3 2.7-.9.7-.6 1-1.4 1-2.3 0-.8-.3-1.6-.9-2.2-.6-.6-1.5-.9-2.6-.9h-2.4zm7.8 21.6l-6.6-10.1h-1.2v10.1H239V53h9.1c3 0 5.3.7 6.9 2.2 1.6 1.4 2.5 3.4 2.5 5.9 0 1.7-.4 3.1-1.3 4.4-.8 1.2-2.1 2.2-3.6 2.8l7.6 11.4H253zM271.3 79.6V53h6.2v21h10.2v5.6zM304.1 74.5c2.3 0 4.1-.8 5.7-2.4 1.5-1.6 2.3-3.5 2.3-5.9 0-2.3-.8-4.3-2.3-5.8-1.5-1.6-3.4-2.3-5.7-2.3-2.3 0-4.2.8-5.7 2.4-1.5 1.6-2.3 3.5-2.3 5.8s.8 4.3 2.3 5.8c1.5 1.6 3.4 2.4 5.7 2.4m0 5.6c-4 0-7.4-1.3-10.1-4-2.7-2.7-4.1-5.9-4.1-9.8 0-3.9 1.3-7.2 4.1-9.8 2.7-2.7 6.1-4 10.1-4s7.4 1.3 10.1 4c2.7 2.6 4.1 5.9 4.1 9.8 0 3.9-1.4 7.2-4.1 9.9-2.7 2.6-6.1 3.9-10.1 3.9M339.7 79.6L328 63.1v16.5h-6.2V53h6.3l11.8 16.7V53h6.3v26.6zM356.8 58.2v16.2h1.7c2.9 0 5.2-.7 6.8-2.1 1.6-1.4 2.5-3.4 2.5-6s-.8-4.6-2.5-6c-1.6-1.4-3.9-2.1-6.8-2.1h-1.7zm-6.2 21.4V53h8.6c4.5 0 8.1 1.2 10.8 3.5 2.7 2.4 4 5.6 4 9.6 0 4.3-1.3 7.6-4.1 10-2.7 2.4-6.4 3.5-11.2 3.5h-8.1zM390.9 74.5c2.3 0 4.1-.8 5.7-2.4 1.5-1.6 2.3-3.5 2.3-5.9 0-2.3-.8-4.3-2.3-5.8-1.5-1.6-3.4-2.3-5.7-2.3-2.3 0-4.1.8-5.6 2.4-1.5 1.6-2.3 3.5-2.3 5.8s.8 4.3 2.3 5.8c1.4 1.6 3.3 2.4 5.6 2.4m0 5.6c-4 0-7.4-1.3-10.1-4-2.7-2.7-4.1-5.9-4.1-9.8 0-3.9 1.3-7.2 4-9.8 2.7-2.7 6.1-4 10.1-4s7.4 1.3 10.1 4c2.7 2.6 4.1 5.9 4.1 9.8 0 3.9-1.4 7.2-4.1 9.9-2.6 2.6-6 3.9-10 3.9M427 79.6l-11.7-16.5v16.5h-6.2V53h6.3l11.8 16.7V53h6.3v26.6z"
            />
          </svg>
        </div>
        <h2>TFL tube fare and travelcard calculator</h2>
        <ul className="links">
          <li
            onClick={() => {
              window.location.reload();
              this.props.handleNav("home");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              this.props.handleNav("about");
            }}
          >
            About
          </li>
        </ul>
      </div>
    );
  }
}

export default HogDetails;
