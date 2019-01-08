@extends ('layouts.master')

@section('style')
<link href="{{ asset('css/app.css') }}" rel="stylesheet">
@endsection

@section ('content')

@if (Auth::user())
<div id="side-nav" data-user="{{ Auth::user()->name }}"></div>
@else 
<div id="side-nav"></div>

<div class="main">
	 <div class="header padding-md">
        <h1 class="text-center main-font color-white position-relative">404 Not Found</h1>
        <h2 class="text-center main-font color-white mt-5">It appears that we can't find that one.</h2>
    </div>
</div>
@endif


@endsection


@section('script')
@endsection