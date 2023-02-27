from django.urls import path, include
from comments import views

urlpatterns = [
    path('all/', views.get_all_comments),
    path('', views.user_comments),
    path('<int:video_id>/', views.get_comments_by_id),
]