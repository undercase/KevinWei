# python formatCat.py cat.txt => outputs formatted contents
# of cat.txt to the console

import fileinput

if __name__ == "__main__":
    lines = []
    for line in fileinput.input():
        lines.append("\"{0}\\n\" +".format(line.replace("\\", "\\\\")[:-1]))
    lines[-1] = "{0}\"".format(lines[-1][:-5])
    for line in lines:
        print(line)
