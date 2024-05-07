if __name__ == '__main__':
    n = int(input())
    records = []
    for _ in range(n):
        name = input()
        score = float(input())
        records.append([name, score])
    
    # Step 3: Find the second lowest grade
    scores = sorted(set(score for name, score in records))
    second_lowest_score = scores[1]
    
    # Step 4: Identify the students who have the second lowest grade
    students_with_second_lowest = [name for name, score in records if score == second_lowest_score]
    
    # Step 5: Sort the names of these students alphabetically
    students_with_second_lowest.sort()
    
    # Step 6: Print each name on a new line
    for student in students_with_second_lowest:
        print(student)
