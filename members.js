/* Expects (in sequence):
 * - Team Number
 * - Student Email
 * - Student First Name
 * - Student Last Name
 * - Class Code
 */

const memberCSVData = 
`Team_1, test_user1@student.uml.edu, Test, User1,101
Team_1, test_user2@student.uml.edu, Test, User2,101
Team_1,kaori_matsubara@student.uml.edu,Kaori,Matsubara,081
Team_1,kyoko_ito@student.uml.edu,Kyoko,Ito,081
Team_1,yuji_inoue@student.uml.edu,Yuji,Inoue,081
Team_1,koki_sasaki@student.uml.edu,Koki,Sasaki,081
Team_1,qi_yu@student.uml.edu,Qi,Yu,081
Team_1,risa_kano@student.uml.edu,Risa,Kano,081
Team_2,teiko_sato@student.uml.edu,Teiko,Sato,081
Team_2,takuya_kikuchi@student.uml.edu,Takuya,Kikuchi,081
Team_2,yusuke_kudo@student.uml.edu,Yusuke,Kudo,081
Team_2,min_li@student.uml.edu,Min,Li,081
Team_2,takako_minamihashi@student.uml.edu,Takako,Minamihashi,081
Team_2,takahiro_sugaiwa@student.uml.edu,Takahiro,Sugaiwa,081
Team_3,haruna_nakatani@student.uml.edu,Haruna,Nakatani,081
Team_3,christina_rizzi@student.uml.edu,Christina,Rizzi,081
Team_3,ayaka_morita@student.uml.edu,Ayaka,Morita,081
Team_3,ayano_fukuhara@student.uml.edu,Ayano,Fukuhara,081
Team_3,naohiro_miyano@student.uml.edu,Naohiro,Miyano,081
Team_4,joseph_oneill1@student.uml.edu,Joseph,O'Neill,081
Team_4,kei_ijichi@student.uml.edu,Kei,Ijichi,081
Team_4,arindam_guha@student.uml.edu,Arindam,Guha,081
Team_4,mary_maruyama@student.uml.edu,Mary,Maruyama,081
Team_4,lucas_maloney@student.uml.edu,Lucas,Maloney,081
Team_4,christian_bautista@student.uml.edu,Christian,Bautista,081
Team_5,ingrid_kirchmaier@student.uml.edu,Ingrid,Kirchmaier,081
Team_5,mitsuo_kuronuma@student.uml.edu,Mitsuo,Kuronuma,081
Team_5,shuhei_shimamura@student.uml.edu,Shuhei,Shimamura,081
Team_5,keita_nonaka@student.uml.edu,Keita,Nonaka,081
Team_5,enrique_martinez@student.uml.edu,Enrique,Martinez,081
Team_6,jolea_morgan@student.uml.edu,Jolea,Morgan,081
Team_6,michael_kalajian@student.uml.edu,Michael,Kalajian,081
Team_6,ernesto_nunez@student.uml.edu,Ernesto,Nunez,081
Team_6,stephen_younger@student.uml.edu,Stephen,Younger,081
Team_6,jodie_hyland@student.uml.edu,Jodie,Hyland,081
Team_6,dharsan_ranjit@student.uml.edu,Dharsan,Ranjit,081`
