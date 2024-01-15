function countNucleotides(strand) {
  if (strand.match(/[^ACGT]/g) != null)
    throw new Error("Invalid nucleotide in strand");

  const dna = { A: 0, C: 0, G: 0, T: 0 };

  for (let char of strand) {
    dna[char] += 1;
  }

  return `${dna.A} ${dna.C} ${dna.G} ${dna.T}`;
}

countNucleotides("GGGGGGGGAAAAAA");
