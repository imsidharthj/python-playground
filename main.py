def main():
  n, m = map(int, input().split())
  design_doormat(n, m)

def design_doormat(n, m):
  for i in range(1, n + 1, 2):  # Top half loop (start from 1, end at n, step 2)
    print((".|." * i).center(m, '-'))

  print('WELCOME'.center(m, '-'))

  for i in range(n - 1, -1, -2):  # Bottom half loop (start from n-1, end at -1, step -2)
    print((".|." * i).center(m, '-'))

main()