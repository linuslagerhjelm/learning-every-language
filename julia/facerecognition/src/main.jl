type Image
  name::String
  image::Array{Float64}
  answer::Int
end

type Perceptron
  percept_type::Int
  weights::Array{Float64}
end

@enum PERCEPT_TYPES Happy = 1 Sad = 2 Mischevous = 3 Mad = 4
const LEARNING_RATE = 0.1
const THRESHOLD = 1

function parseline(line)
  values = filter(val -> !isempty(val), split(line, " "))
  map(x -> parse(Int, x)/32, values)
end

function getimages(file = "data/training.txt")
  images = []
  open(file) do f
    tmpimg = Image("", [], 0);
    for line in eachline(f)
      if contains(line, "Image")
        tmpimg = Image(normalize_string(line, stripcc=true), [], 0)

      elseif !isempty(tmpimg.name) && (length(line) == 1)
        append!(tmpimg.image, [rand()])
        append!(images, [tmpimg])

      elseif !startswith(line, "#") && (length(line) > 1)
        append!(tmpimg.image, parseline(normalize_string(line, stripcc=true)))

      end
    end
  end
  return images
end

function addfacit!(images, file = "data/training-facit.txt")
  open(file) do f
    lines = split(readstring(f), "\n")
    lines = filter(line -> !startswith(line, "#") && length(line) > 1, lines)
    for i in range(1, (length(lines) - 1))
      if length(lines[i]) > 1 && !startswith(lines[i], "#")
        images[i].answer = parse(Int, lines[i][end])
      end
    end
  end
end

function sigmoid(x)
  1.0 / (1.0 + e^(-x))
end

function process(perceptron, image)
  out = map(*, perceptron.weights, image.image)
  sigmoid(sum(out))
end

function update_weights!(perceptron, dw)
  perceptron.weights = map((x,y) -> (x+y), perceptron.weights, dw)
end


function accurate(errors)
  if length(errors) == 0
    return false
  end
  mse = (sum(map(x -> x^2, errors)))/2
  mse < THRESHOLD
end

function expose!(image, perceptron)
  err = Int(perceptron.percept_type == image.answer) - process(perceptron, image)
  dw = map(x -> (LEARNING_RATE * err * x), image.image)
  update_weights!(perceptron, dw)
  return err
end

function train!(perceptrons, images)
  errors = []
  while(!accurate(errors))
    empty!(errors)
    for perceptron in perceptrons
      shuffled_images = shuffle(images)
      for image in shuffled_images
        append!(errors, expose!(image, perceptron))
      end
    end
  end
end

function examine(perceptrons, images)
  correct = 0
  
  for image in images
    activation_max = 0
    p_type = 0
    for perceptron in perceptrons
      activation = process(perceptron, image)
      if activation > activation_max
        activation_max = activation
        p_type = perceptron.percept_type
      end
    end
    if image.answer == p_type
      correct += 1
    end
  end

  println("Got $correct out of $(length(images)) correct. $(round(correct/length(images),2)*100)%")
end

function main()
  training_set = getimages("data/FaceTest/training-A.txt")
  addfacit!(training_set, "data/FaceTest/facit-A.txt")
  examine_set = getimages("data/FaceTest/test-B.txt")
  addfacit!(examine_set, "data/FaceTest/facit-B.txt")

  happy = Perceptron(Int(Happy), rand!(Array{Float64}(401)))
  sad = Perceptron(Int(Sad), rand!(Array{Float64}(401)))
  mischevous = Perceptron(Int(Mischevous), rand!(Array{Float64}(401)))
  mad = Perceptron(Int(Mad), rand!(Array{Float64}(401)))
  perceptrons = (happy, sad, mischevous, mad)

  train!(perceptrons, training_set)
  examine(perceptrons, examine_set)
end

function runner()
  println("Starting")
  for i in range(1, 100)
    main()
  end
end

runner()
