import pandas as pd

def movie_rating(movies: pd.DataFrame, users: pd.DataFrame, movie_ratings: pd.DataFrame) -> pd.DataFrame:
    # Step 1: Find the user who has rated the greatest number of movies
    user_ratings_count = movie_ratings.groupby('user_id').size().reset_index(name='rating_count')
    max_rating_count = user_ratings_count['rating_count'].max()
    top_users = user_ratings_count[user_ratings_count['rating_count'] == max_rating_count]
    top_users = top_users.merge(users, on='user_id', how='left').sort_values('name')
    top_user_name = top_users.iloc[0]['name']

    # Step 2: Find the movie with the highest average rating in February 2020
    feb_ratings = movie_ratings[(movie_ratings['created_at'] >= '2020-02-01') & (movie_ratings['created_at'] <= '2020-02-29')]
    movie_avg_ratings = feb_ratings.groupby('movie_id')['rating'].mean().reset_index(name='avg_rating')
    max_avg_rating = movie_avg_ratings['avg_rating'].max()
    top_movies = movie_avg_ratings[movie_avg_ratings['avg_rating'] == max_avg_rating]
    top_movies = top_movies.merge(movies, on='movie_id', how='left').sort_values('title')
    top_movie_title = top_movies.iloc[0]['title']

    # Prepare the result
    result = pd.DataFrame({
        'results': [top_user_name, top_movie_title]
    })

    return result

# Example usage:
if __name__ == "__main__":
    movies = pd.DataFrame({
        'movie_id': [1, 2, 3],
        'title': ['Avengers', 'Frozen 2', 'Joker']
    })

    users = pd.DataFrame({
        'user_id': [1, 2, 3, 4],
        'name': ['Daniel', 'Monica', 'Maria', 'James']
    })

    movie_ratings = pd.DataFrame({
        'movie_id': [1, 1, 1, 1, 2, 2, 2, 3, 3],
        'user_id': [1, 2, 3, 4, 1, 2, 3, 1, 2],
        'rating': [3, 4, 2, 1, 5, 2, 2, 3, 4],
        'created_at': ['2020-01-12', '2020-02-11', '2020-02-12', '2020-01-01', '2020-02-17', '2020-02-01', '2020-03-01', '2020-02-22', '2020-02-25']
    })

    print(movie_rating(movies, users, movie_ratings))
