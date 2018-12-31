@extends('layouts.master')

@section('style')
<link href="{{ asset('css/app.css') }}" rel="stylesheet">
@endsection

@section('content')

<!-- Mount SideNav.jsx -->
<div id="side-nav"></div>

<div class="main">
    <div class="header padding-md">
        <h1 class="text-center main-font color-white position-relative">Its the Whittle Things Blog</h1>
        <h2 class="text-center main-font color-white mt-5">Blog about life, love, and living in the South</h2>
    </div>
    <div id="blogs">
        <!-- render past 15 blog posts + splash image -->
    </div>
</div>
@endsection


@section('script')
<script src="{{ asset('js/app.js') }}"></script>
@endsection