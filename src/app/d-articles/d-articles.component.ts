import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Doctor, DoctorService } from '../services/doctor.service';
import { Article, ArticleService } from '../services/article.service';

@Component({
  selector: 'app-d-articles',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './d-articles.component.html',
  styleUrl: './d-articles.component.css'
})
export class DArticlesComponent implements OnInit {
  allArticles: Article[] = [];
  filteredArticles: Article[] = [];
  myArticles: Article[] = [];
  activeTab: 'browse' | 'my-articles' | 'write' = 'browse';
  searchQuery: string = '';
  currentDoctor: Doctor | null = null;
  tagInput = '';
  isDragging = false;

  newArticle: {
    title: string;
    content: string;
    imageFile?: File;
    imagePreview?: string;
    tags: string[];
  } = {
    title: '',
    content: '',
    tags: []
  };
  
  constructor(
    private articleService: ArticleService,
    private doctorService: DoctorService
  ) {}
  
  ngOnInit() {
    this.articleService.getArticles().subscribe(articles => {
      this.allArticles = articles;
      this.filteredArticles = [...this.allArticles];
      
      this.doctorService.getCurrentDoctor().subscribe(doctor => {
        this.currentDoctor = doctor;
        this.myArticles = this.allArticles.filter(article => article.authorId === doctor.id);
      });
    });
  }
  
  setActiveTab(tab: 'browse' | 'my-articles' | 'write') {
    this.activeTab = tab;
  }
  
  searchArticles() {
    if (!this.searchQuery.trim()) {
      this.filteredArticles = [...this.allArticles];
      return;
    }
    
    const query = this.searchQuery.toLowerCase();
    this.filteredArticles = this.allArticles.filter(article => 
      article.title.toLowerCase().includes(query) || 
      article.content.toLowerCase().includes(query) ||
      article.authorName.toLowerCase().includes(query)
    );
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    
    const files = event.dataTransfer?.files;
    if (files?.length) {
      this.handleImageFile(files[0]);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.handleImageFile(input.files[0]);
    }
  }

  handleImageFile(file: File) {
    if (file.type.startsWith('image/')) {
      this.newArticle.imageFile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.newArticle.imagePreview = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  addTag() {
    if (this.tagInput.trim() && !this.newArticle.tags.includes(this.tagInput.trim())) {
      this.newArticle.tags.push(this.tagInput.trim());
      this.tagInput = '';
    }
  }

  removeTag(tag: string) {
    this.newArticle.tags = this.newArticle.tags.filter(t => t !== tag);
  }

  formatText(format: string) {
    // Implement rich text formatting
  }

  addHeading() {
    // Implement heading insertion
  }

  addList(type: 'bullet' | 'number') {
    // Implement list insertion
  }

  isFormValid(): boolean {
    return !!(this.newArticle.title && this.newArticle.content && this.newArticle.imageFile);
  }
  
  publishArticle() {
    if (!this.currentDoctor || !this.newArticle.title || !this.newArticle.content) {
      return;
    }
    
    const newArticleData = {
      authorId: this.currentDoctor.id,
      authorName: this.currentDoctor.name,
      authorImage: this.currentDoctor.profilePic,
      title: this.newArticle.title,
      content: this.newArticle.content,
      imageUrl: this.newArticle.imagePreview,
      createdAt: 'Just now',
      likes: 0,
      comments: 0
    };
    
    this.articleService.createArticle(newArticleData).subscribe(article => {
      this.myArticles.unshift(article);
      this.allArticles.unshift(article);
      this.filteredArticles = [...this.allArticles];
      
      // Reset form
      this.newArticle = {
        title: '',
        content: '',
        tags: []
      };
      
      // Switch to my articles tab
      this.setActiveTab('my-articles');
      alert('Article published successfully!');
    });
  }

}
