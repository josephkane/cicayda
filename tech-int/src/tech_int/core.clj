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
    (try
        (do
            (def inputYear (Integer. (read-line)))
            (println "--")
            (def i (atom 0))
            (loop [leapYearVector []
                   year inputYear]
                (when (< @i 20)
                    (if (checkIfLeapYear year)
                        (do
                            ; (conj leapYearVector year)
                            (swap! i inc)
                            (println year)
                        ))

                    (recur leapYearVector (inc year))
                )
            )
        )
        (catch Exception e (println "Sorry, invalid choice."))
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
    [string]
    (ends-with? string "ay")
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
                ; (def inputArray (split inputPhrase #"\s+"))
                (def inputVector (split inputPhrase #"\s+"))
                (if (= (Integer. choice) 1)
                    (do
                        ; (def pigLatinArray (mapv toPigLatin inputArray))
                        ; (println (capitalize (join " " pigLatinArray)))
                        (def pigLatinVector (mapv toPigLatin inputVector))
                        (println (capitalize (join " " pigLatinVector)))
                    )
                    (do
                        ; (if (every? true? (map checkIfPigLatin inputArray))
                        (if (every? true? (map checkIfPigLatin inputVector))
                            (do
                                ; (def englishArray (mapv toEnglish inputArray))
                                ; (println (capitalize (join " " englishArray)))
                                (def englishVector (mapv toEnglish inputVector))
                                (println (capitalize (join " " englishVector)))
                            )
                            (do
                                (println "Phrase is not pig latin, please correct and try again.")
                            )
                        )
                    )
                )
                (println "--")
            )
            (throw (Exception.))
        )
        (catch Exception e (println "Sorry, invalid choice."))
    )
)



