@extends('layouts.master')

@section('style')
<link href="{{ asset('css/app.css') }}" rel="stylesheet">
@endsection

@section('content')
@include('layouts.sidebar')
<div class="main">
    <h1 class="text-center main-font">Its the Whittle Things Blog</h1>
</div>
@endsection


@section('script')
@endsection