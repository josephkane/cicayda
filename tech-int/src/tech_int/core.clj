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

;;; PIG LATIN ;;;

(use '[clojure.string :only (join split capitalize)])

(defn toPigLatin
    [string]
    (str (join (rest string)) (first string) (str "ay"))
)

(defn -pigLatin []
    (println "Enter a phrase:")
    (def inputPhrase (read-line))
    (println "--")
    (def inputArray (split inputPhrase #"\s+"))
    (def pigLatinArray (mapv toPigLatin inputArray))
    (println (capitalize (join " " pigLatinArray)))
    (println "--")
)



