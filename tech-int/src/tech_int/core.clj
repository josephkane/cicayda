(ns tech-int.core
  (:gen-class))

;;; LEAP YEAR ;;;

(defn checkIfLeapYear
    [year]
    (if (or (zero? (mod year 400)) (and (zero? (mod year 4)) (not= 0 (mod year 100))))
        true
        false
    )
)

(defn -leapYear []
    (println "Enter a year: ")
    (def inputYear (Integer. (read-line)))
    (println "--")
    (def i (atom 0))
    (loop [leapYearVector []
           year inputYear]
        (when (< @i 20)
            (if (checkIfLeapYear year)
                (do
                    (conj leapYearVector year)
                    (swap! i inc)
                    (println year)
                ))

            (recur leapYearVector (inc year))
        )
    )
)

;;; SQUARE PHRASE ;;;

(use '[clojure.string :only (join split capitalize ends-with?)])

(defn printPhrase
    [inputVector width]
    (loop [v inputVector
            w width
            i 0]
        (when (< i (count v))
            (if (< (count (v i)) w)
                (do
                    (println (apply str "* " (v i) (apply str (repeat (- w (count (v i))) " ")) " *"))
                )
                (println (apply str "* " (v i) " *"))
            )
            (recur v w (inc i))
        )
    )
)

(defn -sqPhrase []
    (println "Enter a phrase:")
    (def inputPhrase (read-line))
    (def inputVector (split inputPhrase #"\s+"))
    (def width (apply max (mapv count inputVector)))
    (println (apply str (repeat (+ width 4) "*")))
    (printPhrase inputVector width)
    (println (apply str (repeat (+ width 4) "*")))
)


;;; PIG LATIN ;;;


(defn toPigLatin
    [string]
    (str (join (rest string)) (first string) (str "ay"))
)

(defn checkIfPigLatin
    [array]
    (loop [array array
           i 0]
        (if (< i (count array))
            (ends-with? (array i) "ay")
            (recur array (inc i))
        )
    )

)

(defn toEnglish
    [string]
    (def noAy (drop-last 2 string))
    (def restOfWord (drop-last noAy))
    (def firstLetter (last noAy))
    (apply str firstLetter restOfWord)
)

(defn -pigLatin []
    (println "1. English to pig latin")
    (println "2. Pig latin to english")
    (def choice (read-line))
    (try
        (if (and (Integer. choice) (< (Integer. choice) 3))
            (do
                (println "Enter a phrase:")
                (def inputPhrase (read-line))
                (println "--")
                (def inputArray (split inputPhrase #"\s+"))
                (if (= (Integer. choice) 1)
                    (do
                        (def pigLatinArray (mapv toPigLatin inputArray))
                        (println (capitalize (join " " pigLatinArray)))
                    )
                    (do
                        (if (checkIfPigLatin inputArray)
                            (do
                                (def englishArray (mapv toEnglish inputArray))
                                (println (capitalize (join " " englishArray)))
                            )
                            (do
                                (println "Phrase is not pig latin, please correct and try again.")
                                (-pigLatin)
                            )
                        )
                    )
                )
                (println "--")
            )
            (println "Sorry, invalid choice.")
        )
        (catch Exception e (println "Sorry, invalid choice."))
    )
)



