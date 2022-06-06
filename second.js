const sortSquaredArray = (input) => input.map(item => item**2).sort((a, b) => a < b ? -1 : 1)
