import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const bannerData = [
  {
    id: 1,
    image: "https://thumbnails.cbsig.net/_x/w1200/CBS_Production_Entertainment_VMS/2022/10/26/2091444291941/TGMAV_SAlone_16_9_1920x1080_1781067_1920x1080.jpg",
    title: "Top gun Maverick"
  },
  {
    id: 2,
    image: "https://upload.wikimedia.org/wikipedia/pt/e/e0/The_Vampire_Diaries_season_8_poster.jpg",
    title: "The Vampire Diares"
  },
  {
    id: 3,
    image: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRVrTjyoNJtfmlHtnQUZGZ8bHWGqj-70tfh4rTWxObUkIBfRqji61fSoUpkhmGHOFAHOpnyA0MT93oekkogHN3FE2XYys3xQN2nQ.jpg?r=47e",
    title: "Bridgerton"
  }
]


const filmesEmAlta = [
  {
    id: 1,
    title: "27 dresses",
    image: "https://upload.wikimedia.org/wikipedia/pt/4/48/Twenty_seven_dresses.jpg"
  },
  {
    id: 2,
    title: "A empregada",
    image: "https://ingresso-a.akamaihd.net/prd/img/movie/a-empregada/4e37e5ca-5b88-4eee-8bee-07842a605e2f.webp"
  },
  {
    id: 3,
    title: "O agente secreto",
    image: "https://br.web.img2.acsta.net/img/04/71/04712910ab37ea0722ef92320cf4e1ca.jpg"
  },
  {
    id: 4,
    title: "Como eu era antes de você",
    image: "https://play-lh.googleusercontent.com/JQKfopRtWqyD1cUXjx4V00qLnKecgKlSTS6sL0YX1T0H4bzyOK8SxdQIUbZ6NTsKfkBm"
  }
]

const filme = [
  {
    id: 1,
    title: "Bridgerton",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA3dUn99PcIVrsb8Xa2kj_PhfSyZ9jFUGlWQ&s"
  },
  {
    id: 2,
    title: "The vampire diares",
    image: "https://m.media-amazon.com/images/I/81iRry5N2lL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 3,
    title: "My lady Jane",
    image: "https://m.media-amazon.com/images/M/MV5BNmEwYjQ5MWMtZDdiOC00NTk1LWEwOWEtYjQ2NDUxNjk2YWU5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 4,
    title: "Grey´s Anatomy",
    image: "https://br.web.img3.acsta.net/c_310_420/pictures/20/10/07/22/15/3944085.jpg"
  }
]

const favoritos = [
  {
    id: 1,
    title: "Minha vida em marte",
    image: "https://s2-globo-play.glbimg.com/rVPkM8Zwde1MrBXL0tEp5ATs5Ps=/362x536/https://s2-globo-play.glbimg.com/sGvQR0uUFmxkmUFZH14_-Km8OGU=/https://s2.glbimg.com/Rjdsdee8bhYyDmITSlIEKQHMaSM=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/0/R/Uw3FeRQImS3hXsxR2Jwg/2020-927-minha-vida-em-marte-poster.jpg"
  },
  {
    id: 2,
    title: "Crepuscúlo: Amanhecer part 2",
    image: "https://cinema10.com.br/upload/filmes/filmes_1135_A-Saga-Crepusculo-Amanhecer-Parte-2-Poster.jpg"
  },
  {
    id: 3,
    title: "10 coisas que odeio em você",
    image: "https://ingresso-a.akamaihd.net/prd/img/movie/10-coisas-que-odeio-em-voce/988622f7-8601-4c02-8c6d-2a4a65728c41.webp"

  },
  {
    id: 4,
    title: "Nosso sonho",
    image: "https://upload.wikimedia.org/wikipedia/pt/2/28/2453404.jpg-c_310_420_x-f_jpg-q_x-xxyxx.jpg"
  }
]

const { width } = Dimensions.get("window")
// ---------------------------------------------------------
export default function Index() {
  return (
    <SafeAreaView style={style.container}>

      <ScrollView>
        <View >
          <Text style={style.mainTitle}>Senaflix</Text>
          <Text style={style.welcomeText}>O melhor app para quem ama filmes e series</Text>
        </View>

        <View style={style.section}>
          <FlatList
            data={bannerData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={(({ item }) => (
              <View>
                <View style={style.bannerContainer}>
                  <Image style={style.bannerImage} source={{ uri: item.image }}></Image>
                  <Text style={style.bannerTitle}>{item.title}</Text>

                  <TouchableOpacity style={style.bannerButton}>
                    <Text style={style.bannerButtonText}>Assistir</Text>
                  </TouchableOpacity>


                </View>
              </View>

            ))}

          />
        </View>

        <View style={style.section}>
          <text style={style.sectionTitle}>Em alta</text>

          <FlatList
            contentContainerStyle={style.movieList}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filmesEmAlta}
            renderItem={(({ item }) => (
            
                <View style={style.movieItem}>
                  <Image style={style.movieImage} source={{ uri: item.image }} />
                  <Text style={style.movieTitle}>{item.title}</Text>
                </View>
             

            ))} >


          </FlatList>
        </View>
        <View style={style.section}>
          <text style={style.sectionTitle}>Series</text>

          <FlatList
            contentContainerStyle={style.movieList}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filme}
            renderItem={(({ item }) => (
              <View style={style.movieItem}>
                <Image style={style.movieImage} source={{ uri: item.image }} />
                <Text style={style.movieTitle}>{item.title}</Text>
              </View>
            ))} >

            {/* --------------------------------------------------------------- */}
          </FlatList>
        </View>
        <View style={style.section}>
          <text style={style.sectionTitle}>Em alta</text>

          <FlatList
            contentContainerStyle={style.movieList}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={favoritos}
            renderItem={(({ item }) => (
              <View style={style.movieItem}>
                <Image style={style.movieImage} source={{ uri: item.image }} />
                <Text style={style.movieTitle}>{item.title}</Text>
              </View>
            ))} >


          </FlatList>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}
// --------------------------------------------------------------
const style = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor: "#2B0F0F",
    flex: 1,
  },
  mainTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5
  },
  welcomeText: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 25
  },
  movieImage: {
    width: 120,
    height: 180,
    borderRadius: 8
  },
  movieTitle: {
    color: "#c6c6c6",
    marginTop: 5,
    fontSize: 12,
    fontWeight: 600,
    flexWrap: "wrap"
  },

  movieItem: {
    width: 120
  },

  sectionTitle: {
    color: "#e5e5e5",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10
  },
  movieList: {
    gap: 15
  },
  section: {
    marginBottom: 30
  },
  bannerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8
  },
  bannerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    bottom: 50,
    left: 15
  },
  bannerItem: {
    flex: 1,
    height: 200,
    paddingHorizontal: 5,
    position: "relative"
  },
  bannerContainer: {
    width: width - 30
  },
  bannerButton: {
    backgroundColor: "rgb(3, 40, 119)",
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 16,
    position: "absolute",
    bottom: 10,
    left: 15
  },
  bannerButtonText: {
    color:"#fff",
    fontSize: 13,
    fontWeight:"bold"
  }
})
