export const User = ({ user="" }) => 
	<a href="">
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512" className="user-icon">
			<g id="surface1">
			<path d="M 0 367 L 0 512 L 512 512 L 512 367 Z M 30 397 L 380.5 397 L 380.5 482 L 30 482 Z M 482 482 L 410.5 482 L 410.5 397 L 482 397 Z M 482 482 "  />
			<path d="M 79.5 424.5 L 109.5 424.5 L 109.5 454.5 L 79.5 454.5 Z M 79.5 424.5 " />
			<path d="M 135 424.5 L 165 424.5 L 165 454.5 L 135 454.5 Z M 135 424.5 " />
			<path d="M 190.5 424.5 L 220.5 424.5 L 220.5 454.5 L 190.5 454.5 Z M 190.5 424.5 " />
			<path d="M 246 424.5 L 276 424.5 L 276 454.5 L 246 454.5 Z M 246 424.5 "  />
			<path d="M 301.5 424.5 L 331.5 424.5 L 331.5 454.5 L 301.5 454.5 Z M 301.5 424.5 "  />
			<path d="M 256 326 C 345.878906 326 419 252.878906 419 163 C 419 73.121094 345.878906 0 256 0 C 166.121094 0 93 73.121094 93 163 C 93 252.878906 166.121094 326 256 326 Z M 215.78125 133.21875 C 215.78125 111.039062 233.820312 93 256 93 C 278.179688 93 296.21875 111.039062 296.21875 133.21875 C 296.21875 155.398438 278.179688 173.441406 256 173.441406 C 233.820312 173.441406 215.78125 155.398438 215.78125 133.21875 Z M 256 296 C 227.539062 296 201.140625 287.011719 179.488281 271.730469 C 177.019531 269.988281 174.621094 268.171875 172.289062 266.28125 C 176.339844 252.238281 183.878906 239.46875 194.378906 228.96875 C 210.839844 212.511719 232.71875 203.441406 256 203.441406 C 295.109375 203.441406 329.070312 229.410156 339.710938 266.28125 C 337.378906 268.171875 334.980469 269.988281 332.511719 271.730469 C 310.859375 287.011719 284.460938 296 256 296 Z M 256 30 C 329.339844 30 389 89.660156 389 163 C 389 192.671875 379.230469 220.101562 362.75 242.25 C 350.988281 216.238281 330.121094 195.589844 304.511719 183.941406 C 317.878906 171.148438 326.21875 153.140625 326.21875 133.21875 C 326.21875 94.5 294.71875 63 256 63 C 217.28125 63 185.78125 94.5 185.78125 133.21875 C 185.78125 153.128906 194.109375 171.128906 207.460938 183.910156 C 194.851562 189.640625 183.25 197.660156 173.160156 207.75 C 163.070312 217.839844 155.019531 229.5 149.25 242.238281 C 132.761719 220.089844 123 192.671875 123 163 C 123 89.660156 182.660156 30 256 30 Z M 256 30 "  />
			</g>
		</svg>
	</a>

export const Login = () =>
	<a href="/home">
		<svg height="512pt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="login-icon">
			<path d="m229.136719 492c0 11.046875-8.953125 20-20 20h-189.136719c-11.046875 0-20-8.953125-20-20v-472c0-11.046875 8.953125-20 20-20h189.136719c11.046875 0 20 8.953125 20 20s-8.953125 20-20 20h-169.136719v432h169.136719c11.046875 0 20 8.953125 20 20zm262.863281-256h-347.714844l78.992188-78.996094c7.8125-7.8125 7.8125-20.472656 0-28.285156-7.808594-7.808594-20.472656-7.808594-28.285156 0l-113.136719 113.136719c-7.773438 7.777343-7.789063 20.492187 0 28.285156l113.136719 113.136719c7.8125 7.808594 20.472656 7.8125 28.285156 0s7.8125-20.472656 0-28.285156l-78.992188-78.996094h347.714844c11.046875 0 20-8.953125 20-20 0-11.042969-8.953125-19.996094-20-19.996094zm0 0"/>
		</svg>
	</a>

export const Counter = ({ count }) =>
	<p className="count main-font font-sm">
		{count}
	</p>


export const LikeComment = () =>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="like">
		<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
	</svg>


export const Loading = () => 
	<svg width="90px"  height="90px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-ellipsis" >
		<circle cx="84" cy="50" r="1.29847" fill="#585872">
		<animate attributeName="r" values="9;0;0;0;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.9s" repeatCount="indefinite" begin="0s"></animate>
		<animate attributeName="cx" values="84;84;84;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.9s" repeatCount="indefinite" begin="0s"></animate></circle>
		<circle cx="79.0947" cy="50" r="9" fill="#95d5ee"><animate attributeName="r" values="0;9;9;9;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.9s" repeatCount="indefinite" begin="-0.95s"></animate>
		<animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.9s" repeatCount="indefinite" begin="-0.95s"></animate></circle>
		<circle cx="45.0947" cy="50" r="9" fill="#ffe691"><animate attributeName="r" values="0;9;9;9;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.9s" repeatCount="indefinite" begin="-0.475s"></animate>
		<animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.9s" repeatCount="indefinite" begin="-0.475s"></animate></circle>
		<circle cx="16" cy="50" r="7.70153" fill="#ffb6bb"><animate attributeName="r" values="0;9;9;9;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.9s" repeatCount="indefinite" begin="0s"></animate>
		<animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.9s" repeatCount="indefinite" begin="0s"></animate></circle>
		<circle cx="16" cy="50" r="0" fill="#585872"><animate attributeName="r" values="0;0;9;9;9" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.9s" repeatCount="indefinite" begin="0s"></animate>
		<animate attributeName="cx" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.9s" repeatCount="indefinite" begin="0s"></animate></circle>
	</svg>

export const Search = () => 
	<div className="search-wrapper">
	    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
	        <path className="search-path" d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/>
        </svg>
    </div>






