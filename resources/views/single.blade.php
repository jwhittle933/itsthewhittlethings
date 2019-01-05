@extends('layouts.master')

@section('style')
<link href="{{ asset('css/app.css') }}" rel="stylesheet">
@endsection


@section('content')

<!-- Mount SideNav.jsx -->
<div id="side-nav"></div>

<div class="main">
    <div class="header padding-md">
        <h1 class="text-center main-font color-white position-relative">{{ $data[0]->title }}</h1>
        <h2 class="text-center main-font color-white mt-5">{{$data[0]->author}}</h2>
    </div>
    <div >
    	<p class="main-font">{{ $data[0]->body }}</p>
    	<p class="main-font">{{ $data[0]->created_at->diffForHumans() }}</p>
    </div>
    <div id="comment-form" class="comment-form">
        @if(session('success'))
            <p class="main-font ml-5">{{ session('success')}}</p>
        @endif
    	<h2 class="main-font  mb-5">Leave a Comment:</h2>
    	<form action="/comment" method="POST">
            @csrf
            <input type="hidden" name="id" value="{{ $data[0]->id }}">
    		<input class="main-font" type="text" name="name" placeholder="Name" required>
    		<textarea class="main-font" type="text" name="comment" rows="15" placeholder="Comment" required></textarea>
            <button type="submit" class="save-comment">Save</button>
    	</form>
    </div>
</div>
@endsection