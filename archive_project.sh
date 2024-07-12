#$test:1$
#$wed 26 june 2024$

#variables

BASE="/home/ubuntu/Neel9626"
Days=10
Depth=1
Run=0

# Check if the directory exists
if [ ! -d "$BASE" ]; then
  echo "Directory does not exist: $BASE"
  exit 1
fi

# Create archive folder if it does not exist
if [ ! -d "$BASE/archive" ]; then
  mkdir "$BASE/archive" || { echo "Permission denied to create $BASE/archive"; exit 1; }
fi

# Find the list of files larger than 20MB

files= $`(find "$BASE" -maxdepth $Depth -type f -size +20M)`; 
if [[$files -ne 0]]; 
then 
	echo "There are files more than 20MB"

#checking how many files are there 

if [ -z "$files" ];
then 
	echo "no files are found" 
	exit 1;

#storing them in to archive folder

for i  in $files; do
	echo "files are processing $files";
  if [ $Run -eq 0 ]; 
  then
    echo "[$`(date "+%y-%m-%d %H:%M:%S")`] archiving $i ==> $BASE/archive";
    gzip "$i" || exit 1;
    mv "$i.gz" "$BASE/archive" || exit 1;
  fi
done

