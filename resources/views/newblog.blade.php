@extends('layouts.master')

{{-- Bundled with app.js
@section('style')
<link href="{{ asset('css/app.css') }}" rel="stylesheet">
@endsection
--}}

@section('content')

<!-- Mount SideNav.jsx -->
<div id="side-nav" data-text="{!! $test !!}"></div>
@if (Auth::user())
<div id="newblog" class="newblog">
    <div class="header padding-md">
        <h1 class="text-center main-font color-white position-relative">Get Creative</h1>
        <h2 class="text-center main-font color-white mx-auto mt-5 w-75">“If the book is true, it will find an audience that is meant to read it.”</h2>
        <p class="text-center main-font color-white mx-auto">– Wally Lamb</p>
    </div>
    <form class="create" method="POST" action="/blog">
        @csrf
        <label for="author">Author</label>
        <input class="input" type="text" name="author" value="{{ Auth::user()->name }}">
        <label class="main-font" for="title">Title</label>
        <input class="input" name="title" type="text" placeholder="What's your title?">
        <label class="main-font" for="body">Body</label>
        <textarea class="input" name="body" type="text" rows="15" placeholder="Type your text here..."></textarea>
        <label for="tags">Tags</label>
        <input type="text" name="tags" class="input" placeholder="Add keywords tags...">
        <button type="submit" class="save">Save</button>
    </form>
</div>
@else
<div class="main">
    <h1>You must be logged in to view this page.</h1>
</div>
@endif
@endsection


@section('script')
<script src="{{ asset('js/app.js') }}"></script>
@endsection