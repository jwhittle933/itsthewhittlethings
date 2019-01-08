@extends('layouts.master')
 
@section('style')
<link href="{{ asset('css/app.css') }}" rel="stylesheet">
@endsection



@section('content')

<!-- Mount SideNav.jsx -->
@if (Auth::user())
<div id="side-nav" data-user="{{ Auth::user()->name }}"></div>
@else 
<div id="side-nav"></div>
@endif

<div class="main">
    <div class="header padding-md">
        <h1 class="text-center main-font color-white position-relative">{{ $data[0]->title }}</h1>
        <h2 class="text-center main-font color-white mt-5">{{$data[0]->author}}</h2>
    </div>
    <div class="post">
    	<p class="main-font first-letter">{!! nl2br($data[0]->body) !!}</p>
    	<p class="main-font">{{ $data[0]->created_at->diffForHumans() }}</p>
    </div>
    <div class="blog-nav">
        @if ( $data[0]->id !== 1 )
        <a href="/blog/{{ $data[0]->id - 1 }}" class="main-font font-lg blog-nav-button">
            <svg viewbox="0 0 40 40" class="blog-nav-arrow">
                <path d="M20 10 L10 20 L20 30" ></path>
            </svg>
            Previous
        </a>
        @endif
        {{-- Conditionally render 'Next' button based on final blog post id --}}
        <a href="/blog/{{ $data[0]->id + 1 }}" class="main-font font-lg blog-nav-button">
            Next
            <svg viewbox="0 0 40 40" class="blog-nav-arrow" class="blog-nav-arrow">
                <path d="M20 10 L30 20 L20 30" ></path>
            </svg>
        </a>
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
    		<textarea class="main-font" type="text" name="comment" rows="10" placeholder="Comment" required></textarea>
            <button type="submit" class="save-comment">Save</button>
    	</form>
    </div>
    <div class="comments">
        <h3 class="main-font">Previous comments:</h3>
        @empty ( $comments[0] )
            <p class="main-font font-md">Be the first to leave a comment!</p>
        @endempty
        @foreach ( $comments as $comment )
            <div class="comment">
                <p class="main-font font-lg">{{ $comment->name }} ({{ $comment->created_at ? $comment->created_at->diffForHumans() : '-' }}):</p>
                <p class="main-font font-md"> {!! nl2br($comment->comment) !!}</p>
                @if (Auth::user())
                <a href="" class="main-font font-sm comment-delete">Delete</a>
                @endif
            </div>
        @endforeach
    </div>
</div>
@endsection