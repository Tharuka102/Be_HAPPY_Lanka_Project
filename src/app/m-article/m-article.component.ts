import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  author: string;
  categories: string[];
  tags: string[];
  image: string;
  content: string;
}

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './m-article.component.html',
  styleUrl: './m-article.component.css'
})
export class MArticleComponent {
  menuActive: boolean = false;
  selectedCategory: string = 'all';
  showPopup: boolean = false;
  selectedArticle: Article | null = null;

  articles: Article[] = [
    {
      id: 1,
      title: 'Understanding Anxiety and Panic Attacks',
      description: 'Learn to recognize triggers and develop coping mechanisms',
      date: 'Jan 15, 2024',
      author: 'Dr. Sarah Johnson',
      categories: ['anxiety', 'stress'],
      tags: ['Anxiety', 'Mental Health'],
      image: 'sunset',
      content: 'Anxiety and panic attacks can be overwhelming experiences that affect both your mental and physical well-being. This comprehensive guide helps you understand the root causes, recognize early warning signs, and develop effective coping strategies. Learn about breathing techniques, grounding exercises, and when to seek professional help.'
    },
    {
      id: 2,
      title: 'Mindfulness Meditation for Beginners',
      description: 'Start your journey to inner peace with simple meditation techniques',
      date: 'Jan 14, 2024',
      author: 'Mark Williams',
      categories: ['meditation', 'stress'],
      tags: ['Meditation', 'Wellness'],
      image: 'meditation',
      content: 'Discover the transformative power of mindfulness meditation. This beginner-friendly guide introduces you to the basics of meditation, including proper posture, breathing techniques, and simple exercises to help you get started. Learn how regular practice can reduce stress, improve focus, and enhance overall well-being.'
    },
    {
      id: 3,
      title: 'Finding the Right Therapist',
      description: 'A comprehensive guide to choosing your mental health professional',
      date: 'Jan 13, 2024',
      author: 'Dr. Emily Chen',
      categories: ['therapy'],
      tags: ['Mental Health', 'Therapy', 'Self-Care'],
      image: 'sunset',
      content: 'Choosing the right therapist is a crucial step in your mental health journey. This guide walks you through the different types of therapy, what to look for in a therapist, and how to make the most of your sessions. Learn about various therapeutic approaches and find the best match for your needs.'
    },
    {
      id: 4,
      title: 'Breaking Free from Social Anxiety',
      description: 'Practical strategies for overcoming social fears',
      date: 'Jan 12, 2024',
      author: 'Dr. Michael Brown',
      categories: ['anxiety', 'growth'],
      tags: ['Social Anxiety', 'Personal Growth'],
      image: 'meditation',
      content: 'Social anxiety can limit your potential and prevent you from forming meaningful connections. This article provides practical strategies for gradually overcoming social fears, building confidence, and developing better social skills. Learn how to challenge negative thoughts and create positive social experiences.'
    },
    {
      id: 5,
      title: 'The Power of Daily Journaling',
      description: 'Transform your life through reflective writing',
      date: 'Jan 11, 2024',
      author: 'Lisa Anderson',
      categories: ['growth', 'stress'],
      tags: ['Personal Growth', 'Mindfulness'],
      image: 'sunset',
      content: 'Journaling is a powerful tool for personal growth and stress management. Discover different journaling techniques, prompts for self-reflection, and how to maintain a consistent practice. Learn how daily writing can help you process emotions, track progress, and achieve your goals.'
    },
    {
      id: 6,
      title: 'Advanced Meditation Techniques',
      description: 'Take your practice to the next level',
      date: 'Jan 10, 2024',
      author: 'Mark Williams',
      categories: ['meditation'],
      tags: ['Meditation', 'Advanced Practice'],
      image: 'meditation',
      content: 'Ready to deepen your meditation practice? This guide explores advanced techniques including visualization, loving-kindness meditation, and body scanning. Learn how to overcome common challenges in long-term practice and discover new ways to enhance your mindfulness journey.'
    },
    {
      id: 7,
      title: 'Workplace Stress Management',
      description: 'Effective strategies for maintaining work-life balance',
      date: 'Jan 9, 2024',
      author: 'Sarah Thompson',
      categories: ['stress', 'growth'],
      tags: ['Work-Life Balance', 'Stress Management'],
      image: 'sunset',
      content: 'Learn practical techniques for managing workplace stress and maintaining a healthy work-life balance. This guide covers time management, boundary setting, and stress-reduction techniques specifically designed for the modern workplace. Discover how to stay productive while protecting your mental health.'
    },
    {
      id: 8,
      title: 'Understanding Cognitive Behavioral Therapy',
      description: 'A deep dive into CBT techniques and benefits',
      date: 'Jan 8, 2024',
      author: 'Dr. Emily Chen',
      categories: ['therapy', 'anxiety'],
      tags: ['CBT', 'Mental Health', 'Therapy'],
      image: 'meditation',
      content: 'Cognitive Behavioral Therapy (CBT) is one of the most effective therapeutic approaches for managing anxiety and depression. This comprehensive guide explains the principles of CBT, common techniques, and how you can apply them in your daily life to improve your mental well-being.'
    }
  ];

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  filterArticles(category: string) {
    this.selectedCategory = category;
  }

  getFilteredArticles() {
    if (this.selectedCategory === 'all') {
      return this.articles;
    }
    return this.articles.filter(article => 
      article.categories.includes(this.selectedCategory)
    );
  }

  openPopup(article: Article) {
    this.selectedArticle = article;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.selectedArticle = null;
  }

  getCategoryCount(category: string): number {
    if (category === 'all') {
      return this.articles.length;
    }
    return this.articles.filter(article => 
      article.categories.includes(category)
    ).length;
  }
}