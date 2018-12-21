@extends('layouts.master')

@section('style')
<link href="{{ asset('css/app.css') }}" rel="stylesheet">
@endsection

@section('content')

<!-- Mount SideNav.jsx -->
<div id="side-nav"></div>

<div class="main">
    <div class="header">
        <h1 class="text-center main-font color-white">Its the Whittle Things Blog</h1>
    </div>
</div>
@endsection


@section('script')
<script src="{{ asset('js/app.js') }}"></script>
@endsection