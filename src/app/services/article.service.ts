import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';


export interface Article {
  id: string;
  authorId: string;
  authorName: string;
  authorImage: string;
  title: string;
  content: string;
  imageUrl?: string;
  createdAt: string;
  likes: number;
  comments: number;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  // Mock data for articles
  private articles: Article[] = [
    {
      id: 'article1',
      authorId: 'd1',
      authorName: 'Dr. Sarah Lee',
      authorImage: 'https://images.pexels.com/photos/5214976/pexels-photo-5214976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Understanding Heart Health',
      content: 'Heart disease remains the leading cause of death worldwide. Regular exercise, a balanced diet, and avoiding smoking can significantly reduce your risk. Regular checkups are essential for early detection and management of heart conditions.',
      imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      createdAt: '2 days ago',
      likes: 24,
      comments: 5
    },
    {
      id: 'article2',
      authorId: 'd2',
      authorName: 'Dr. Michael Chen',
      authorImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Managing Stress in Modern Life',
      content: 'Chronic stress can lead to numerous health problems including heart disease, depression, and weakened immune function. Implementing stress management techniques such as mindfulness, regular exercise, and adequate sleep can significantly improve overall health.',
      imageUrl: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      createdAt: '3 days ago',
      likes: 18,
      comments: 3
    },
    {
      id: 'article3',
      authorId: 'd3',
      authorName: 'Dr. Emily Johnson',
      authorImage: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'The Importance of Preventive Healthcare',
      content: 'Preventive healthcare focuses on maintaining well-being and preventing illness before it occurs. Regular checkups, screenings, and healthy lifestyle choices are key components of preventive healthcare that can save lives and reduce healthcare costs long-term.',
      imageUrl: 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      createdAt: '5 days ago',
      likes: 32,
      comments: 7
    }
  ];

  constructor() { }

  getArticles(): Observable<Article[]> {
    return of(this.articles);
  }

  getArticlesByAuthor(authorId: string): Observable<Article[]> {
    return of(this.articles.filter(article => article.authorId === authorId));
  }

  getArticleById(id: string): Observable<Article | undefined> {
    return of(this.articles.find(article => article.id === id));
  }

  createArticle(article: Omit<Article, 'id'>): Observable<Article> {
    const newArticle: Article = {
      ...article,
      id: 'article' + (this.articles.length + 1),
      createdAt: 'Just now',
      likes: 0,
      comments: 0
    };
    this.articles.unshift(newArticle);
    return of(newArticle);
  }
}