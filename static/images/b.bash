for file in *.jpg; do
    cwebp -q 80 "$file" -o "${file%.jpg}.webp"
done
