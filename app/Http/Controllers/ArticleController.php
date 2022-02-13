<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        $data = Article::all();
        $dataMap = $data->map(function($article){
            return [
                'id' => $article->id,
                'title' => str()->title($article->title),
                'created_by' => $article->user,
                'text' => $article->text,
            ];
        });
        return inertia('Articles/Index', [
            'data' => $dataMap,
        ]);
    }
}
