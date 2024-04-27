import style from './Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Home() {
    return ( 

      <div >
          <div className={style.page}>
            <div className={style.content}>
<div className={style.section}> 
<div className={style.boxLeft}>
                <div className={style.cardBox}>
                 <div className={style.image}></div>
                 <div className={style.cardBody}>
                  <h1>Hola! soy Ludmila</h1>
                
            <p>Me considero una entusiasta del mundo IT con una pasión por el aprendizaje continuo. He completado una variedad de cursos en tecnología y disfruto enfrentando desafíos que amplíen mis horizontes. En mi proceso de aprendizaje, he podido llevar adelante prácticas y proyectos donde pude utilizar mis conocimientos en javascript, react, css, redux, bootstrap, figma, etc.</p>
           
  <p>

<ul className='d-flex'>
  <li>  <svg id="Layer_1" height="50" viewBox="0 0 24 24" width="50" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m22.563 1.437c-2.374-2.374-5.919-1.795-10.563 1.7-4.643-3.495-8.187-4.075-10.563-1.7s-1.795 5.919 1.7 10.563c-3.495 4.643-4.075 8.188-1.7 10.563a4.7 4.7 0 0 0 3.442 1.437c1.971 0 4.351-1.052 7.121-3.136 2.769 2.084 5.149 3.136 7.121 3.136a4.7 4.7 0 0 0 3.442-1.437c2.375-2.375 1.8-5.919-1.7-10.563 3.495-4.644 4.075-8.188 1.7-10.563zm-3.478.591a2.806 2.806 0 0 1 2.067.819c1.746 1.747.456 4.713-1.588 7.539-.838-.988-1.782-2.015-2.858-3.092s-2.106-2.021-3.094-2.86c1.898-1.373 3.86-2.406 5.473-2.406zm-.774 9.972c-1.011 1.22-2.082 2.361-3.016 3.3s-2.075 2-3.295 3.011c-1.22-1.011-2.361-2.082-3.295-3.011s-2.005-2.08-3.016-3.3c1.011-1.22 2.082-2.362 3.016-3.295s2.075-2.005 3.295-3.017c1.22 1.01 2.361 2.083 3.3 3.017s2 2.075 3.011 3.295zm-15.463-9.152a2.8 2.8 0 0 1 2.067-.82c1.613 0 3.575 1.033 5.473 2.406-.988.839-2.016 1.783-3.094 2.86s-2.02 2.1-2.859 3.092c-2.043-2.826-3.335-5.792-1.587-7.538zm0 18.3c-1.746-1.746-.456-4.713 1.587-7.538.839.988 1.783 2.015 2.859 3.092s2.1 2.023 3.089 2.861c-2.825 2.046-5.791 3.337-7.535 1.589zm18.3 0c-1.745 1.744-4.71.457-7.535-1.585.986-.838 2.014-1.787 3.089-2.861s2.02-2.1 2.858-3.092c2.048 2.83 3.34 5.796 1.592 7.542z"/><circle cx="12" cy="12" r="2"/></svg>
</li>
  <li><svg xmlns="http://www.w3.org/2000/svg" id="js" viewBox="0 0 24 24" width="50" height="50"><path d="M16.122,18.75a2.456,2.456,0,0,0,2.225,1.37c.934,0,1.531-.467,1.531-1.113,0-.773-.613-1.047-1.642-1.5l-.564-.242c-1.627-.693-2.708-1.562-2.708-3.4a3.014,3.014,0,0,1,3.3-2.979A3.332,3.332,0,0,1,21.474,12.7l-1.756,1.127a1.534,1.534,0,0,0-1.451-.966.982.982,0,0,0-1.08.966c0,.677.419.951,1.387,1.37l.564.241c1.916.822,3,1.66,3,3.543,0,2.031-1.595,3.143-3.737,3.143a4.333,4.333,0,0,1-4.11-2.306Zm-7.967.2c.354.628.677,1.16,1.451,1.16.741,0,1.209-.29,1.209-1.418V11.02H13.07v7.7a3.063,3.063,0,0,1-3.368,3.4,3.5,3.5,0,0,1-3.383-2.06Z"/></svg>
</li>
  <li><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
<path d="M 24 2 C 16.832 2 11 10.292328 11 20.486328 C 11 25.752514 12.564938 30.494647 15.060547 33.859375 A 3.5 3.5 0 0 0 18.5 38 A 3.5 3.5 0 1 0 18.5 31 A 3.5 3.5 0 0 0 17.931641 31.050781 C 16.143565 28.387233 15 24.611465 15 20.486328 C 15 12.633328 19.122 6 24 6 C 28.119 6 31.689125 10.7375 32.703125 16.9375 C 34.125125 17.3455 35.541688 17.897453 36.929688 18.564453 C 36.251687 9.2704531 30.712 2 24 2 z M 22.5 17 A 3.5 3.5 0 1 0 22.5 24 A 3.5 3.5 0 0 0 25.640625 22.041016 C 28.890379 21.837485 32.64609 22.840116 36.113281 24.917969 C 42.973281 29.030969 46.703812 36.223047 44.257812 40.623047 C 43.453812 42.069047 42.005359 43.108953 40.068359 43.626953 C 37.279359 44.372953 33.859234 43.993672 30.490234 42.638672 C 29.421234 43.632672 28.245891 44.565828 26.962891 45.423828 C 30.290891 47.104828 33.8105 47.996094 37.0625 47.996094 C 38.4725 47.996094 39.833516 47.830234 41.103516 47.490234 C 44.110516 46.685234 46.410906 44.982406 47.753906 42.566406 C 51.337906 36.117406 47.127922 26.858281 38.169922 21.488281 C 33.907448 18.931871 29.185543 17.753815 25.035156 18.09375 A 3.5 3.5 0 0 0 22.5 17 z M 9.1601562 23.324219 C 2.0791563 28.795219 -0.95795312 36.799406 2.2480469 42.566406 C 3.5910469 44.982406 5.8914375 46.685234 8.8984375 47.490234 C 10.169438 47.830234 11.527453 47.996094 12.939453 47.996094 C 16.739453 47.996094 20.910031 46.789672 24.707031 44.513672 C 28.954867 41.96696 32.09575 38.543722 33.876953 34.962891 C 35.628054 34.772138 37 33.301038 37 31.5 C 37 29.57 35.43 28 33.5 28 C 31.57 28 30 29.57 30 31.5 C 30 32.040225 30.132082 32.546629 30.351562 33.003906 C 28.907628 35.978686 26.213448 38.945387 22.650391 41.082031 C 18.354391 43.658031 13.599641 44.609953 9.9316406 43.626953 C 7.9956406 43.108953 6.5481406 42.069047 5.7441406 40.623047 C 3.8101406 37.143047 5.7462969 31.923469 10.029297 27.855469 C 9.6182969 26.415469 9.3241562 24.899219 9.1601562 23.324219 z"></path>
</svg></li>
  <li><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 50 50">
<path fill-rule="evenodd" d="M 42 6 L 39 40 L 25 44 L 11 40 L 8 6 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z"></path>
</svg></li>
  <li><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 50 50">
<path d="M43.03,27.802c-1.747,0.009-3.261,0.429-4.53,1.054c-0.464-0.926-0.934-1.741-1.013-2.347 c-0.092-0.707-0.199-1.129-0.088-1.972c0.111-0.843,0.599-2.036,0.591-2.125c-0.007-0.089-0.109-0.518-1.117-0.526 c-1.008-0.007-1.87,0.194-1.972,0.46c-0.102,0.266-0.296,0.865-0.416,1.49c-0.177,0.914-2.012,4.174-3.055,5.879 c-0.341-0.666-0.631-1.252-0.691-1.716c-0.092-0.707-0.199-1.129-0.088-1.972c0.111-0.843,0.599-2.036,0.591-2.125 c-0.007-0.089-0.109-0.518-1.117-0.526c-1.008-0.007-1.87,0.194-1.972,0.46c-0.102,0.266-0.21,0.888-0.416,1.49 c-0.207,0.602-2.647,6.039-3.286,7.448c-0.326,0.718-0.609,1.295-0.809,1.689c-0.001-0.001-0.001-0.002-0.001-0.002 s-0.012,0.026-0.034,0.071c-0.171,0.335-0.273,0.521-0.273,0.521s0.001,0.003,0.003,0.007c-0.136,0.246-0.281,0.475-0.353,0.475 c-0.05,0-0.151-0.656,0.022-1.555c0.363-1.886,1.235-4.828,1.227-4.929c-0.004-0.052,0.162-0.564-0.57-0.833 c-0.711-0.26-0.965,0.174-1.03,0.175c-0.063,0.001-0.11,0.153-0.11,0.153s0.793-3.308-1.512-3.308c-1.44,0-3.436,1.576-4.42,3.004 c-0.62,0.338-1.948,1.063-3.357,1.837c-0.541,0.297-1.093,0.601-1.617,0.89c-0.036-0.039-0.071-0.079-0.108-0.118 c-2.794-2.981-7.958-5.089-7.739-9.096c0.08-1.457,0.586-5.293,9.924-9.946c7.649-3.812,13.773-2.763,14.831-0.438 c1.512,3.321-3.273,9.494-11.216,10.384c-3.027,0.339-4.62-0.834-5.017-1.271c-0.417-0.46-0.479-0.481-0.635-0.394 c-0.254,0.141-0.093,0.547,0,0.789c0.237,0.617,1.21,1.712,2.87,2.256c1.46,0.479,5.013,0.742,9.311-0.92 c4.813-1.862,8.571-7.041,7.468-11.37c-1.123-4.403-8.423-5.85-15.332-3.396c-4.112,1.461-8.563,3.754-11.764,6.747 c-3.806,3.56-4.412,6.658-4.162,7.952c0.889,4.6,7.228,7.595,9.767,9.815c-0.125,0.069-0.243,0.134-0.35,0.193 c-1.273,0.63-6.105,3.159-7.314,5.831c-1.371,3.031,0.218,5.206,1.271,5.499c3.26,0.907,6.606-0.725,8.404-3.407 c1.798-2.681,1.578-6.172,0.753-7.766c-0.01-0.02-0.022-0.039-0.032-0.059c0.329-0.195,0.664-0.392,0.996-0.587 c0.648-0.38,1.284-0.735,1.836-1.036c-0.309,0.846-0.535,1.86-0.653,3.325c-0.138,1.721,0.567,3.945,1.49,4.82 c0.406,0.385,0.895,0.394,1.205,0.394c1.074,0,1.564-0.893,2.103-1.95c0.662-1.296,1.249-2.804,1.249-2.804 s-0.737,4.075,1.271,4.075c0.731,0,1.467-0.949,1.795-1.432c0.001,0.005,0.001,0.008,0.001,0.008s0.019-0.031,0.056-0.095 c0.076-0.116,0.119-0.19,0.119-0.19s0.002-0.008,0.004-0.021c0.294-0.51,0.946-1.674,1.924-3.594 c1.263-2.48,2.475-5.586,2.475-5.586s0.113,0.76,0.482,2.015c0.217,0.739,0.679,1.556,1.043,2.339 c-0.293,0.407-0.473,0.64-0.473,0.64s0.002,0.004,0.005,0.012c-0.234,0.311-0.497,0.646-0.772,0.974 c-0.997,1.188-2.185,2.544-2.344,2.936c-0.187,0.461-0.143,0.801,0.219,1.073c0.264,0.199,0.735,0.23,1.227,0.197 c0.896-0.06,1.527-0.283,1.838-0.418c0.485-0.171,1.05-0.441,1.58-0.831c0.978-0.719,1.568-1.748,1.512-3.111 c-0.031-0.751-0.271-1.495-0.574-2.198c0.089-0.128,0.178-0.256,0.267-0.387c1.542-2.255,2.738-4.732,2.738-4.732 s0.113,0.76,0.482,2.015c0.187,0.636,0.556,1.329,0.887,2.009c-1.45,1.178-2.349,2.547-2.662,3.445 c-0.577,1.661-0.125,2.414,0.723,2.585c0.384,0.078,0.927-0.098,1.335-0.271c0.508-0.168,1.118-0.449,1.688-0.868 c0.978-0.719,1.919-1.726,1.862-3.089c-0.026-0.62-0.194-1.236-0.422-1.828c1.229-0.512,2.821-0.797,4.848-0.56 c4.349,0.508,5.202,3.223,5.039,4.359c-0.163,1.137-1.075,1.761-1.38,1.95c-0.305,0.189-0.398,0.254-0.372,0.394 c0.037,0.204,0.178,0.196,0.438,0.152c0.358-0.06,2.283-0.924,2.366-3.022C50.102,30.703,47.55,27.778,43.03,27.802z M9.512,39.102 c-1.44,1.571-3.453,2.165-4.316,1.665c-0.932-0.54-0.563-2.854,1.205-4.521c1.077-1.016,2.468-1.952,3.391-2.529 c0.21-0.126,0.518-0.312,0.893-0.537c0.062-0.035,0.097-0.055,0.097-0.055l-0.001-0.002c0.072-0.043,0.147-0.088,0.223-0.134 C11.647,35.363,11.024,37.453,9.512,39.102z M20.005,31.968c-0.502,1.223-1.552,4.352-2.191,4.184 c-0.549-0.144-0.883-2.523-0.11-4.863c0.389-1.178,1.22-2.586,1.709-3.133c0.786-0.879,1.652-1.167,1.862-0.81 C21.544,27.8,20.32,31.201,20.005,31.968z M28.675,36.105c-0.213,0.111-0.408,0.181-0.498,0.127 c-0.067-0.04,0.088-0.186,0.088-0.186s1.084-1.167,1.512-1.698c0.248-0.309,0.537-0.676,0.85-1.086 c0.003,0.041,0.004,0.082,0.004,0.122C30.627,34.782,29.277,35.725,28.675,36.105z M35.354,34.582 c-0.159-0.113-0.132-0.478,0.389-1.614c0.205-0.446,0.672-1.198,1.485-1.916c0.094,0.295,0.152,0.578,0.15,0.842 C37.367,33.653,36.112,34.31,35.354,34.582z"></path>
</svg></li>
  <li><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 50 50">
<path d="M7.854,11.705C7.771,9.257,9.628,7,12.139,7h25.726c2.511,0,4.368,2.257,4.285,4.705c-0.08,2.351,0.024,5.397,0.77,7.88	c0.749,2.491,2.012,4.066,4.08,4.268v2.294c-2.068,0.202-3.331,1.777-4.08,4.268c-0.747,2.483-0.85,5.529-0.77,7.88	C42.232,40.743,40.375,43,37.864,43H12.139c-2.511,0-4.368-2.257-4.285-4.705c0.08-2.351-0.024-5.397-0.771-7.88	C6.335,27.924,5.069,26.349,3,26.147v-2.294c2.068-0.202,3.335-1.777,4.083-4.268C7.83,17.102,7.934,14.056,7.854,11.705z"></path><path fill="#fff" d="M27.79,24.451v-0.029c1.911-0.33,3.402-2.121,3.402-4.094c0-1.395-0.536-2.576-1.551-3.416	c-1.011-0.837-2.431-1.28-4.105-1.28h-7.669v18.734h7.709c2.003,0,3.666-0.489,4.808-1.415c1.144-0.927,1.749-2.276,1.749-3.901	C32.133,26.596,30.389,24.752,27.79,24.451z M24.199,23.568h-3.28v-5.484h3.903c2.141,0,3.32,0.939,3.32,2.645	C28.141,22.56,26.741,23.568,24.199,23.568z M20.919,25.864h3.876c2.8,0,4.22,1.012,4.22,3.007c0,1.993-1.4,3.046-4.048,3.046	h-4.048V25.864z"></path>
</svg></li>
<li><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 32 32">
<path d="M 15.994141 3 C 15.629141 3 15.264219 3.0895313 14.949219 3.2695312 L 5.0390625 8.9902344 C 4.3990625 9.3602344 4 10.060781 4 10.800781 L 4 21.179688 C 4 21.929688 4.3990625 22.620234 5.0390625 22.990234 L 7.640625 24.490234 C 8.900625 25.110234 9.3499219 25.109375 9.9199219 25.109375 C 11.789922 25.109375 12.859375 23.979531 12.859375 22.019531 L 12.859375 11.310547 C 12.859375 11.150547 12.730312 11.019531 12.570312 11.019531 L 11.320312 11.019531 C 11.150313 11.019531 11.029297 11.150547 11.029297 11.310547 L 11.029297 22.009766 C 11.029297 22.889766 10.120391 23.749531 8.6503906 23.019531 L 5.9296875 21.449219 C 5.8296875 21.399219 5.7695313 21.289687 5.7695312 21.179688 L 5.7695312 10.810547 C 5.7695312 10.690547 5.8296875 10.589297 5.9296875 10.529297 L 15.839844 4.8105469 C 15.929844 4.7505469 16.050391 4.7505469 16.150391 4.8105469 L 26.060547 10.529297 C 26.160547 10.589297 26.220703 10.690781 26.220703 10.800781 L 26.220703 21.179688 C 26.220703 21.289687 26.160313 21.399219 26.070312 21.449219 L 16.150391 27.179688 C 16.060391 27.229688 15.929844 27.229688 15.839844 27.179688 L 13.289062 25.669922 C 13.219062 25.619922 13.120781 25.610391 13.050781 25.650391 C 12.340781 26.050391 12.210781 26.100078 11.550781 26.330078 C 11.390781 26.380078 11.140625 26.479766 11.640625 26.759766 L 14.949219 28.720703 C 15.269219 28.900703 15.630234 29 15.990234 29 C 16.360234 29 16.719062 28.900703 17.039062 28.720703 L 26.960938 22.990234 C 27.600938 22.620234 28 21.929688 28 21.179688 L 28 10.810547 C 28 10.060547 27.600938 9.37 26.960938 9 L 17.039062 3.2695312 C 16.724063 3.0895313 16.359141 3 15.994141 3 z M 18.660156 11.005859 C 15.830156 11.005859 14.140625 12.205078 14.140625 14.205078 C 14.140625 16.375078 15.819062 16.974141 18.539062 17.244141 C 21.789062 17.564141 22.039062 18.045547 22.039062 18.685547 C 22.039062 19.785547 21.150547 20.255859 19.060547 20.255859 C 16.430547 20.255859 15.850156 19.594922 15.660156 18.294922 C 15.640156 18.154922 15.520859 18.054688 15.380859 18.054688 L 14.089844 18.054688 C 13.929844 18.054688 13.810547 18.185938 13.810547 18.335938 C 13.810547 20.005937 14.720547 21.994141 19.060547 21.994141 C 22.200547 21.994141 24 20.755703 24 18.595703 C 24 16.455703 22.549766 15.884609 19.509766 15.474609 C 16.419766 15.074609 16.109375 14.864531 16.109375 14.144531 C 16.109375 13.544531 16.380156 12.755859 18.660156 12.755859 C 20.690156 12.755859 21.449766 13.194453 21.759766 14.564453 C 21.789766 14.694453 21.899062 14.794922 22.039062 14.794922 L 23.330078 14.794922 C 23.410078 14.794922 23.479063 14.755313 23.539062 14.695312 C 23.589062 14.645313 23.619375 14.564609 23.609375 14.474609 C 23.409375 12.114609 21.840156 11.005859 18.660156 11.005859 z"></path>
</svg></li>
</ul>
    





  </p>
                  <div className={style.cardButtons}>
                    <Link to='https://github.com/Foggynoti0n'> <button className={style.btn}> Follow me on GitHub</button></Link>
                 
                </div>
                 </div>
                </div>

              </div>
              <div className={style.boxRigth}>
             <div className={style.imageR}></div>
              </div>
</div>
            </div>
          <div className={style.title}>
          <h2>Mis proyectos</h2>
          <p>En cada uno de los proyectos llevados a cabo, pude pulir mis habilidades tech y aprender acerca del trabajo en equipo</p>
          </div>
          <div className={style.cards}>

<div className={style.projectCard}>
<Link to='https://wearfashion.vercel.app/'>
<div src="..." className={style.imageCard} alt="..."> </div>
</Link>
<div className={style.bodyCard}>
<div className="card-body">
    <h5 className="card-title">Wearfashion</h5>
    <p className="card-text">Este ecommerce es un destino de moda urbana que ofrece una amplia selección de ropa, calzado y accesorios para aquellos que buscan un estilo moderno y urbano. Desde camisetas gráficas hasta zapatillas de deporte de moda, la tienda en línea presenta productos de marcas populares y diseñadores emergentes. La interfaz de usuario es fácil de navegar, con opciones de búsqueda avanzada y filtros para ayudar a los clientes a encontrar exactamente lo que están buscando.</p>
    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
</div>
</div>

<div  className={style.projectCard}>
  <Link to='https://github.com/Foggynoti0n/Dogs' >
  <div src="..." className={style.imageCard2} alt="..."> </div>
  </Link>

<div className={style.bodyCard}>
<div className="card-body">
    <h5 className="card-title">Paws</h5>
    <p className="card-text">

Esta página es un refugio digital para perros que buscan un hogar amoroso. Ofrece una plataforma intuitiva donde los usuarios pueden navegar a través de perfiles detallados de perros en busca de adopción. Los usuarios pueden filtrar la búsqueda según sus preferencias, como tamaño, edad y nivel de actividad. Además, la página proporciona información sobre el proceso de adopción, consejos de cuidado de mascotas y recursos útiles para los nuevos dueños de perros.</p>
    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
</div>
  
</div>


          </div>
        </div>

        <footer className={style.footer}>
      <div className={style.footerContent}>
        <p>© 2024 Miranda Ludmila</p>
        <h5>No dudes en contactarme mediante mis redes sociales!</h5>
        <div className={style.socialIcons}>
          <a href="https://www.linkedin.com/in/ludmila-rosa-miranda/" >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{"mix-blend-mode": "normal"}}><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g>
</svg>
          </a>
          <a href="https://www.instagram.com/_froggynotion" target="_blank" rel="noopener noreferrer">
 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{"mix-blend-mode": "normal"}}><g transform="scale(5.12,5.12)"><path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path></g></g>
</svg></a>
          <a href="https://github.com/Foggynoti0n">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ 'mix-blend-mode': "normal"}}><g transform="scale(5.12,5.12)"><path d="M25,2c-12.68866,0 -23,10.31134 -23,23c0,12.68867 10.31134,23 23,23c12.68867,0 23,-10.31133 23,-23c0,-12.68866 -10.31133,-23 -23,-23zM25,4c11.60734,0 21,9.39266 21,21c0,0.07137 -0.00515,0.14169 -0.00586,0.21289c-0.63961,-0.05904 -1.37863,-0.11511 -2.31836,-0.14844c-1.32872,-0.04712 -3.00352,-0.03347 -4.90234,0.06055c0.07041,-0.49035 0.11977,-0.98762 0.12109,-1.49805c0.09683,-1.87262 -0.53201,-3.62449 -1.55469,-5.17187c0.24707,-0.85373 0.5369,-1.93986 0.60938,-3.17187c0.0826,-1.40428 -0.03862,-2.96144 -1.16602,-4.01367l-0.28906,-0.26953h-0.39453c-2.68307,0 -4.51959,1.12321 -5.64258,2.01367c-1.6215,-0.62765 -3.44481,-1.01367 -5.45703,-1.01367c-2.02363,0 -3.86447,0.39142 -5.55273,1.01758c-1.12235,-0.89089 -2.96048,-2.01758 -5.64648,-2.01758h-0.39258l-0.28906,0.26758c-1.09819,1.01974 -1.19936,2.53418 -1.13086,3.93164c0.06041,1.23229 0.33345,2.35292 0.57617,3.24805c-1.03996,1.57759 -1.66406,3.37475 -1.66406,5.15234c0,0.51163 0.04758,1.01046 0.11719,1.50195c-1.80576,-0.08375 -3.41548,-0.09989 -4.69336,-0.05469c-0.9397,0.03324 -1.67878,0.08884 -2.31836,0.14844c-0.0006,-0.06534 -0.00586,-0.12983 -0.00586,-0.19531c0,-11.60733 9.39266,-21 21,-21zM14.39648,13.13086c2.01758,0.19118 3.53551,1.09211 4.23828,1.7168l0.46875,0.41406l0.57813,-0.23633c1.58145,-0.65119 3.34534,-1.02539 5.31836,-1.02539c1.97302,0 3.73739,0.37608 5.19922,1.01563l0.58594,0.25781l0.47852,-0.42578c0.70301,-0.6249 2.22351,-1.5261 4.24219,-1.7168c0.2684,0.44498 0.50163,1.07781 0.44531,2.03516c-0.0674,1.14572 -0.37387,2.39364 -0.60547,3.13477l-0.15039,0.48242l0.29883,0.4082c0.98947,1.34928 1.49398,2.80953 1.4082,4.35352l-0.00195,0.02734v0.02734c0,2.49545 -0.89861,4.49273 -2.8125,5.97266c-1.91384,1.47993 -4.93523,2.42773 -9.1875,2.42773c-4.25227,0 -7.27556,-0.94781 -9.18945,-2.42773c-1.91389,-1.47993 -2.81055,-3.4772 -2.81055,-5.97266c0,-1.46471 0.52892,-3.07601 1.50586,-4.4082l0.29297,-0.39844l-0.14062,-0.47461c-0.23173,-0.78787 -0.51577,-2.06426 -0.57227,-3.2168c-0.04699,-0.95862 0.17989,-1.56453 0.41016,-1.9707zM8.88477,26.02148c0.70669,0.00903 1.51669,0.04717 2.32813,0.08789c0.07753,0.3118 0.16593,0.61852 0.27344,0.91797c-3.30736,0.06975 -5.7816,0.40233 -7.30664,0.6875c-0.06448,-0.50035 -0.11584,-1.00482 -0.14453,-1.51562c1.12705,-0.10696 2.71584,-0.20499 4.84961,-0.17773zM41.11523,26.03711c2.13229,-0.02708 3.72049,0.07105 4.84766,0.17773c-0.02866,0.50348 -0.07914,1.00082 -0.14258,1.49414c-1.57954,-0.28977 -4.12064,-0.6223 -7.51367,-0.67578c0.1053,-0.29353 0.19299,-0.59498 0.26953,-0.90039c0.89512,-0.04798 1.76839,-0.08592 2.53906,-0.0957zM11.91211,28.01953c0.59674,1.1958 1.44941,2.26349 2.57617,3.13477c1.54054,1.19123 3.54334,2.02354 5.98828,2.46875c-0.31986,0.32865 -0.61078,0.68955 -0.86914,1.07031l-0.06055,-0.05273c0.0055,-0.0063 -0.49713,0.24525 -1.24805,0.3125c-0.75092,0.06725 -1.67721,0.04688 -2.49805,0.04688c-1.225,0 -1.76457,-0.57879 -2.62695,-1.63281c-0.47755,-0.64363 -1.05973,-1.16486 -1.625,-1.56055c-0.57881,-0.40517 -1.07257,-0.69113 -1.68359,-0.79297l-0.08203,-0.01367h-0.08398c-0.46667,0 -0.91824,0.03379 -1.33984,0.51563c-0.2108,0.24092 -0.3561,0.68694 -0.26172,1.06445c0.09438,0.37752 0.3332,0.6095 0.54688,0.75195c1.36672,0.91115 1.60826,2.71448 2.46484,4.31836c0.79992,1.59392 2.52629,2.34961 4.29102,2.34961h2.59961v4.80273c-7.03219,-2.4822 -12.33532,-8.59812 -13.66797,-16.09961c1.5309,-0.28835 4.09451,-0.63502 7.58008,-0.68359zM37.88281,28.02734c3.56273,0.0305 6.19824,0.37672 7.78711,0.66992c-1.33087,7.50424 -6.63585,13.6226 -13.66992,16.10547v-5.20312c0,-1.58457 -0.52036,-3.3319 -1.42578,-4.78906c-0.2749,-0.44241 -0.59827,-0.86081 -0.95898,-1.23633c2.31522,-0.45738 4.21713,-1.2754 5.69727,-2.41992c1.12432,-0.86939 1.97509,-1.93387 2.57031,-3.12695zM23.69922,34.09961h2.80078c0.81282,0 1.68042,0.64779 2.375,1.76563c0.69458,1.11783 1.125,2.61894 1.125,3.73438v5.79883c-1.60259,0.3908 -3.27621,0.60156 -5,0.60156c-1.72379,0 -3.39741,-0.21077 -5,-0.60156v-5.79883c0,-1.09074 0.46783,-2.5883 1.20898,-3.71094c0.74116,-1.12264 1.67741,-1.78906 2.49023,-1.78906zM12.30859,35.28125c0.86577,0.89801 1.91393,1.71875 3.49219,1.71875c0.77917,0 1.7517,0.02807 2.67578,-0.05469c0.00329,-0.00029 0.00648,-0.00166 0.00977,-0.00195c-0.12175,0.35 -0.21258,0.70217 -0.28906,1.05664h-2.79687c-1.23333,0 -2.10462,-0.44557 -2.50586,-1.24805l-0.00781,-0.01367l-0.00586,-0.01172c-0.1644,-0.30537 -0.38021,-0.91597 -0.57226,-1.44531z"></path></g></g>
</svg>
          </a>
     
        </div>
        <span>lurm98@gmail.com</span>
      </div>
    </footer>
      </div>
     );
}

export default Home;