@extends('layouts.master')

@section('style')
<link href="{{ asset('css/app.css') }}" rel="stylesheet">
@endsection

@section('content')

<!-- Mount SideNav.jsx -->
<div id="side-nav"></div>

<div id="newblog" class="newblog">
    <div class="header padding-md">
        <h1 class="text-center main-font color-white position-relative">Get Creative</h1>
        <h2 class="text-center main-font color-white mt-5">“If the book is true, it will find an audience that is meant to read it.”</h2>
        <small class="text-center main-font color-white">Wally Lamb</small>
    </div>
    <form class="create" method="POST" action="/blog">
        @csrf
        <label for="author">Author</label>
        <input type="text" name="author" class="input new w-75" placeholder="What's your name?">
        <label class="main-font" for="title">Title</label>
        <input class="input new w-75" name="title" type="text" placeholder="What's your title?">
        <label class="main-font" for="body">Body</label>
        <textarea class="input new w-100" name="body" type="text" rows="15" placeholder="Type your text here..."></textarea>
        <label for="tags">Tags</label>
        <input type="text" name="tags" class="input new w-75" placeholder="Add keywords tags...">
        <button type="submit" class="save">Save</button>
    </form>
</div>

@endsection


@section('script')
<script src="{{ asset('js/app.js') }}"></script>
@endsection