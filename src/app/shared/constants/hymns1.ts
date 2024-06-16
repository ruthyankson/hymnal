import { ChorusModel } from "../models/chorus.model";
import { HymnModel } from "../models/hymn.model";
import { StanzaModel } from "../models/stanza.model";

export const HYMNS_1: HymnModel[] = [
  // new HymnModel(1, "some title", [new StanzaModel("verse1"),], "key"),
  new HymnModel
  (1, "ONLY BELIEVE",
    [
      new StanzaModel("Fear not, little flock, from the cross to the throne,\nFrom death into life He went for His own;\nAll power in earth, all power above,\nIs given to Him for the flock of His love."),
      new StanzaModel("Fear not, little flock, He goeth ahead,\nYour Shepherd selecteth the path you must tread;\nThe waters of Marah He'll sweeten for thee,\nHe drank all the bitter in Gethsemane."),
      new StanzaModel("Fear not, little flock, whatever your lot,\nHe enters all rooms, \"the doors being shut;\"\nHe never forsake, He never is gone,\nSo count on His presence in darkness and dawn.")
    ], "C",
    new ChorusModel("Only believe, only believe,\nAll things are possible, only believe;\nOnly believe, only believe\nAll things are possible, only believe.\n(Lord, I believe …)\n(Lord, I receive …)\n(Jesus is here …)")
  ),

  new HymnModel(
    2, "AMAZING GRACE",
    [
      new StanzaModel("Amazing Grace! How sweet the sound,\nThat saved a wretch like me!\nI once was lost but now am found,\nWas blind, but now I see."),
      new StanzaModel("'Twas grace that taught my heart to fear,\nAnd Grace my fears relieved;\nHow precious did that grace appear\nThe hour I first believed!"),
      new StanzaModel("Through many dangers, toils and snares,\nI have already come;\n'Tis grace hath brought me safe thus far,\nAnd grace will lead me home."),
      new StanzaModel("When we've been there ten thousand years,\nBright shining as the sun;\nWe've no less days to sing God's praise\nThan when we first begun.")
    ], "Ab"
  ),

  new HymnModel(
    3, "THEY COME",
    [
      new StanzaModel("They come from the East and West,\nThey come from the lands afar,\nTo feast with the King, to dine as His guest;\nHow blessed these pilgrims are!\nBeholding His hallowed face\nAglow with light divine;\nBlest partakers of His grace,\nAs gems in His crown to shine."),
      new StanzaModel("I look on the great white throne,\nBefore it the ransom'd stand;\nNo longer are tears, no sorrow is known\nNor death in that goodly land\nMy Saviour has gone before,\nPreparing the way for me;\nSoon we'll meet to part no more\nThru time or eternity."),
      new StanzaModel("The gates of that holy place\nStand open by night and day;\nO look to the Lord who \"giveth more grace,\"\nWhose love has prepared the way.\nA home in those mansions fair\nHis hand hath reserved for all.\nFor the wedding feast prepare,\nObeying the gracious call."),
      new StanzaModel("Oh, Jesus is coming soon,\nOur trials will then be o'er.\nWhat if our Lord this moment should come\nFor those who are free from sin?\nThen would it bring you joy,\nOr Sorrow and deep despair?\nWhen Our Lord in glory comes,\nWe'll meet Him up in the air.")
    ], "Eb",
    new ChorusModel("Since Jesus has set me free,\nI'm happy as heart can be;\nNo longer I bear the burdens of care.\nHis yoke is so sweet to me.\nMy soul was as black as night,\nBut darkness has taken flight;Now I shout the victory,\nFor Jesus has set me free.")
  ),

  new HymnModel(
    4, "I LOVE HIM",
    [
      new StanzaModel("Gone from my heart the world and all it charms;\nNow, through the blood, I'm saved from all alarms;\nDown at the cross my heart is bending low;\nThe precious blood of Jesus cleanses white as snow."),
      new StanzaModel("Once I was lost, and 'way down deep in sin;\nOnce was a slave to passions fierce within;\nOnce was afraid to trust a loving God;\nBut now I'm cleansed from every stain through Jesus' blood."),
      new StanzaModel("Once I was bound, but now I am set free;\nOnce I was blind, but now the light I see;\nOnce I was dead, but now in Christ I live,\nTo tell the world around the peace that He doth give.")
    ], "C",
    new ChorusModel("I love Him, I love Him\nBecause He first love me\nAnd purchased my salvation\nOn Calvary's tree.")
    ),

  new HymnModel(
    5, "SWEET HOUR OF PRAYER",
    [
      new StanzaModel("Sweet Hour of prayer, sweet hour of prayer,\nThat calls me from a world of care,\nAnd bids me, at my Father's throne,\nMake all my wants and wishes known;\nIn seasons of distress and grief,\nMy soul has often found relief,\nAnd oft escaped the tempter's snare.\nBy Thy return, sweet hour of prayer."),
      new StanzaModel("Sweet hour of prayer, sweet hour of prayer,\nThe joy I feel, the bliss I share,\nOf those whose anxious spirits burn\nWith strong desires for Thy return!\nWith such I hasten to the place\nWhere God, my Saviour, shows His face,\nAnd gladly take my station there,\nAnd wait for Thee, sweet hour of prayer."),
      new StanzaModel("Sweet hour of prayer, sweet hour of prayer,\nThy wings shall my petition bear\nTo Him whose truth and faithfulness\nEngage the waiting soul to bless;\nAnd since He bids me seek His face,\nBelieve His Word and trust His grace,\nI'll cast on Him my every care,\nAnd wait for Thee, sweet hour of prayer.")
    ], "Eb"
  ),

  new HymnModel(
    6, "OH, HOW I LOVE JESUS",
    [
      new StanzaModel("There is a name I love to hear,\nI love to sing its worth;\nIt sounds like music in mine ear,\nThe sweetest name on earth."),
      new StanzaModel("It tells me of a Saviour's love,\nWho died to set me free;\nIt tells me of His precious blood;\nThe sinner's perfect plea."),
      new StanzaModel("It tells me what my Father hath\nIn store for every day,\nAnd though I tread a darksome path,\nYields sunshine all the way."),
      new StanzaModel("It tells of One whose loving heart\nCan feel my deepest woe,\nWho in each sorrow bears a part,That none can bear below.")
    ], "Ab",
    new ChorusModel("Oh, how I love Jesus,\nOh, how I love Jesus,\nOh, how I love Jesus,\nBecause He first loved me.\n(I'll never forsake Him …)\n(To me He is so wonderful…)")
  ),

  new HymnModel(7, "WHEN THE REDEEMED ARE GATHERING IN",
    [
      new StanzaModel("I am thinking of the rapture\nIn our blessed home on high,\nWhen the redeemed are gathering in;\nHow we'll raise the heavenly\nanthem in that city in the sky,\nWhen the redeemed are gathering in."),
      new StanzaModel("There will be a great procession\nOver on the street of gold,\nWhen the redeemed are gathering in;\nO what music, O what singing,\no'er the city will be rolled,\nWhen the redeemed are gathering in."),
      new StanzaModel("Saints will sing redemption's\nStory with their voices clear and strong,\nWhen the redeemed are gathering in;\nThen the angles all will listen,\nFor they cannot join that song,\nWhen the redeemed are gathering in."),
      new StanzaModel("Then the Saviour will give orders\nTo prepare the banquet board,\nWhen the redeemed are gathering in;\nAnd we'll hear His invitation,\n\"Come, ye blessed of the Lord,\"\nWhen the redeemed are gathering in.")
    ], "G",
    new ChorusModel("When the redeemed are gathering in,\nWashed like the snow, and free from all sin;\nHow we will shout, and how we will sing,\nWhen the redeemed are gathering in.")
  ),

  new HymnModel(8, "OH, I WANT TO SEE HIM",
    [
      new StanzaModel("AS I journey through the land, singing as I go,\nPointing souls to Calvary, to the crimson flow,\nMany arrows pierce my soul from without, within;\nBut my Lord leads me on, through Him I must win."),
      new StanzaModel("When in service for my Lord, dark may be the night,\nBut I'll cling more close to Him, He will give me light;\nSatan's snares may vex my soul, turn my thoughts aside;\nBut my Lord goes ahead, leads whate'er betide."),
      new StanzaModel("When in valleys low I look toward the mountain height,\nAnd behold my Saviour there, leading in the fight,\nWith a tender hand outstretched toward the valley low;\nGuiding me, I can see, as I onward go."),
      new StanzaModel("When before me billows rise from the mighty deep.\nThen my Lord directs my bark, He doth safely keep,\nAnd He leads me gently on through this world below;\nHe's a real Friend to me, O I love Him so.")
    ], "Ab",
    new ChorusModel("Oh, I want to see Him, look upon His face.\nThere to sing forever of His saving grace;\nOn the streets of Glory let me lift my voice;\nCares all past, home at last, ever to rejoice.")
  ),

  new HymnModel(9, "FEELING SO MUCH BETTER",
    [
      new StanzaModel("Feeling So much better talking about this good old Way,\nFeeling so much better talking about the Lord;\n Let's go on, Let's go on talking about this good old Way.\nLet's go on, let's go on talking about the Lord"),
      new StanzaModel("The devil he don't like it, talking about this good old Way,\nThe devil he don't like it talking about the Lord;\nSo, Let's go on, Let's go on talking about this good old Way,\nLet's go on, let's go on talking about the Lord.")
    ], "F"
  ),

  new HymnModel(10, "TEACH ME, LORD, TO WAIT",
    [
      new StanzaModel("Teach Me, Lord, to wait down on my knees,\nTill in Your own good time You answer my pleas;\nTeach me not to rely on what others do,\nBut to wait in prayer for an answer from you."),
      new StanzaModel("Teach me, Lord, to wait while hearts are aflame,\nHelp me humble my pride and call on Your Name;\nKeep my faith renewed, Keep my eyes on Thee,\nHelp me be on this earth what You want me to be.")
    ], "F",
    new ChorusModel("They that wait upon the Lord, shall renew their strength,\nThey shall mount up with wings as an eagle,\nThey shall run and not be weary, they shall walk and not faint;\nTeach me, Lord, teach me, Lord, to wait.")
  ),

  new HymnModel(11, "HALLELUJAH, WE SHALL RISE",
    [
      new StanzaModel("In the resurrection morning,\nWhen the trump of God shall sound,\nWe shall rise, (Hallelujah!) we shall rise!\nThen the saints will come rejoicing\nAnd no tears will e'er be found,\nWe shall rise, (Hallelujah!) we shall rise."),
      new StanzaModel("In the resurrection morning,\nWhat a meeting it will be,\nWe shall rise, (Hallelujah!) we shall rise!\nWhen our fathers and our mothers,\nAnd our loved ones we shall see,\nWe shall rise, (Hallelujah!) we shall rise."),
      new StanzaModel("In the resurrection morning,\nBlessed thought it is to me,\nWe shall rise, (Hallelujah!) we shall rise!\nI shall see my blessed Saviour,\nWho so freely died for me,\nWe shall rise, (Hallelujah!) we shall rise."),
      new StanzaModel("In the resurrection morning,\nWe shall meet Him in the air,\nWe shall rise, (Hallelujah!) we shall rise!\nAnd be carried up to glory,\nTo our home so bright and fair,\nWe shall rise, (Hallelujah!) we shall rise.")
    ], "Bb",
    new ChorusModel("We shall rise, (Hallelujah!)\nWe shall rise! (Amen)\nWe shall rise, (Hallelujah!)\nIn the resurrection morning,\nWhen death's prison bars are broken.\nWe shall rise, (Hallelujah!) we shall rise")
  ),

  new HymnModel(12, "WEAR A CROWN",
    [
      new StanzaModel("Am I a soldier of the cross,\nA follower of the Lamb,\nAnd shall I fear to own His cause,\nOr blush to speak His Name?"),
      new StanzaModel("Must I be carried to the skies\nOn flow'ry beds of ease,\nWhile others fought to win the prize,\nAnd sailed through bloody seas?"),
      new StanzaModel("Are there no foes for me to face?\nMust I not stem the flood?\nIs this vile world a friend to grace\nTo help me on to God?"),
      new StanzaModel("Sure, I must fight if I would reign,\nIncrease my courage, Lord;\nI'll bear the toil, endure the pain.\nSupported by Thy Word.")
    ], "Ab",
    new ChorusModel("And when the battle's over, we shall wear a crown!\nYes, we shall wear a crown! Yes we shall wear a crown.\nAnd when the battle's over! we shall wear a crown\nIn the new Jerusalem.\nWear a crown, wear a crown,\nWear a bright and shining crown.\nAnd when the battle's over, we shall wear a crown\nIn the New Jerusalem.")
  ),

  new HymnModel(13, "MARVELOUS GRACE",
    [
      new StanzaModel("Marvelous Grace of our loving Lord,\nGrace that exceeds our sin and our guilt.\nYonder on Calvary's mount outpoured,\nThere where the Blood of the Lamb was spilt."),
      new StanzaModel("Sin and despair like the sea waves cold,\nThreaten the soul with infinite loss;\nGrace that is greater, yes grace untold,\nPoints to the Refuge, the Mighty Cross."),
      new StanzaModel("Dark is the stain that we cannot hide,\nWhat can avail to wash it away?\nLook! There is flowing a crimson tide;\nWhiter than snow you may be today."),
      new StanzaModel("Marvelous, infinite, matchless grace,\nFreely bestowed on all who believe;\nYou that are longing to see His face,\nWill you this moment His grace receive?")
    ], "F",
    new ChorusModel("Grace, Grace, God's Grace,\nGrace that will pardon and cleanse within;\nGrace, Grace, God's Grace,\nGrace that is greater than all our sin.")
  ),

  new HymnModel(14, "ZION’S HILL",
    [
      new StanzaModel("There waits for me a glad tomorrow,\nWhere gates of pearl swing open wide,\nAnd when I've passed this vale of sorrow,\nI'll camp upon the other side.\n"),
      new StanzaModel("Some day I'll hear the angles singing,\nBeyond the shadows of the tomb;\nAnd all the bells of heaven ringing,\nWhile saints are singing, \"Home, sweet Home.\""),
      new StanzaModel("Some day my labors will be ended,\nAnd all my wand'rings will be o'er,\nAnd all earth's broken ties be mended,\nAnd I shall sigh and weep no more."),
      new StanzaModel("Some day the dark clouds will be rifted,\nAnd all the night of gloom be past;\nAnd all life's burdens will be lifted,\nThe day of rest shall dawn at last.")
    ], "Ab",
    new ChorusModel("Some day beyond the reach of mortal ken,\nSome day, God only knows just where and when,\nThe wheels of mortal life shall all stand still,\nAnd I shall go to dwell on Zion's hill.")
  ),

  new HymnModel(15, "WE'RE MARCHING TO ZION",
    [
      new StanzaModel("Come, we that love the Lord,\nAnd let our joys be known,\nJoin in a song with sweet accord,\nJoin in a song with sweet accord,\nAnd thus surround the throne,\nAnd thus surround the throne."),
      new StanzaModel("Let those refuse to sing\nWho never knew our God;\nBut children of the heavenly King,\nBut children of the heavenly King,\nMay speak their joys abroad,\nMay speak their joys abroad."),
      new StanzaModel("The hill of Zion yields\nA thousand sacred sweets\nBefore we reach the heavenly fields\nBefore we reach the heavenly fields\nOr walk the golden street,\nOr walk the golden street."),
      new StanzaModel("Then let our songs abound,\nAnd every tear be dry;\nWe're marching thru Immanuel's ground,\nWe're marching thru Immanuel's ground,\nTo fairer worlds on high,\nTo fairer worlds on high.")
    ], "G",
    new ChorusModel("We're marching to Zion,\nBeautiful, Beautiful Zion;\nWe're marching upward to Zion.\nThe beautiful city of God.")
  ),

  new HymnModel(16, "CLEANSE ME",
    [
      new StanzaModel("Search me, O God, and know my heart today;\nTry me, O Saviour, know my thoughts, I pray;\nSee if there be some wicked way in me;\nCleanse me from every sin, and set me free."),
      new StanzaModel("I praise Thee, Lord, for cleansing me from sin;\nFulfill Thy Word, and make me pure within;\nFill me with fire, where once I burned with shame;\nGrant my desire to magnify Thy Name."),
      new StanzaModel("Lord, take my life, and make it wholly Thine;\nFill my poor heart with Thy great love divine;\nTake all my will, my passion, self and pride;\nI now surrender; Lord, in me abide."),
      new StanzaModel("O Holy Ghost, revival comes from Thee;\nSend a revival, start the work in me;\nThy Word declares Thou wilt supply our need;\nFor blessing now, O Lord, I humbly plead.")
    ], "F"
  ),

  new HymnModel(17, "MY SHEEP KNOW MY VOICE",
    [
      new StanzaModel("MY sheep know My voice,\nAnd the path that I take,\nThey follow wherever I go;\nMy sheep know My voice\nAnd come at My call,\nBut a stranger's voice do they not know."),
      new StanzaModel("My sheep know My voice,\nAnd the pastures of green,\nWhere I lead them so often to feed;\nMy sheep know My voice,\nAnd the cool sparkling stream,\nWhere beside its still waters I lead."),
      new StanzaModel("My sheep know My voice,\nAnd the valley of death,\nThru which I shall lead them some day;\nBut no danger nor harm\nCan touch one of them,\nFor I will be with them alway.")
    ], "Bb",
    new ChorusModel("My sheep know My voice.\nAnd day by day,\nThey abide in the fold,\nAnd go not astray;\nThey love Me because\nI have made them My choice,\nAnd they follow My call,\nFor My sheep know My voice.")
  ),

  new HymnModel(18, "ONWARD, CHRISTIAN SOLDIERS",
    [
      new StanzaModel("Onward, Christian soldiers!\nMarching as to war,\nWith the cross of Jesus\nGoing on before;\nChrist, the royal Master,\nLeads against the foe;\nForward into battle,\nSee, His banners go!"),
      new StanzaModel("Like a mighty army\nMoves the Church of God;\nBrothers, we are treading\nWhere the saints have trod;\nWe are not divided,\nAll one body we;\nOne in hope and doctrine,\nOne in charity."),
      new StanzaModel("Crowns and thrones may perish,\nKingdoms rise and wane;\nBut the Church of Jesus\nConstant will remain;\nGates of hell can never\n'Gainst that Church prevail;\nWe have Christ's own promise,\nWhich can never fail."),
      new StanzaModel("At the sign of triumph,\nSatan's host doth flee;\nOh, then, Christian solders,\nOn to Victory!\nHell's foundations quiver\nAt the shout of praise;\nBrothers, lift your voices,\nLoud your anthems raise!"),
      new StanzaModel("Onward, then, ye people!\nJoin our happy throng;\nBlend with ours your voices\nIn the triumph song;\nGlory, laud, and honor.\nUnto Christ the King;\nThis through countless ages\nMen and angels sing.")
    ], "G",
    new ChorusModel("Onward, Christian soldiers!\nMarching as to war,\nWith the cross of Jesus\nGoing on before.")
  ),

  new HymnModel(19, "LET’S TALK ABOUT JESUS",
    [
      new StanzaModel("Let’s talk about Jesus,\nThe King of kings is He,\nThe Lord of lords, Supreme\nThroughout Eternity;\nThe great I AM, the Way,\nThe Truth, the Life, the Door;\nLet's talk about Jesus more and more."),
      new StanzaModel("Let's talk about Jesus,\nLet all the world proclaim,\nThe pow'r and majesty\nOf such a wondrous Name.\nThe Babe of Bethlehem,\nThe Bright and Morning Star,\nLet's sing His praises near and far."),
      new StanzaModel("Let's talk about Jesus,\nThe Bread of Life is He,\nThe Saviour of the world,\nThe Man of Galilee.\nThe Prophet, Priest and King,\nThe Mighty God is He,\nThe well of Living water free."),
      new StanzaModel("Let's talk about Jesus,\nThe Prince of peace is He,\nThe Great Physician too,\nDown through all history.\nThe Lily pure and white,\nThe Rose of Sharon fair,\nThe shepherd of such tender care."),
      new StanzaModel("Let's talk about Jesus,\nThe Rock of ages He,\nThe lamb of sinners slain,\nThe Man of Calvary.\nThe Great Emmanuel,\nThe Word of God sublime,\nHe is our Bridegroom so Divine.")
    ], "Bb"
  ),

  new HymnModel(20, "WHEN UPON THE CLOUDS OF HEAVEN",
    [
      new StanzaModel("When upon the clouds of heaven,\nChrist shall come to earth again,\nWill the world be glad to see Him,\nWhen our Lord shall come again?"),
      new StanzaModel("Will His coming bring rejoicing?\nOr will it bring tears and pain?\nAre you ready to receive Him,\nWhen our Lord shall come again?"),
      new StanzaModel("Will you join in lamentation?\nOr the angel's glad refrain?\nWill you help His people crown Him,\nWhen our Lord shall come again?"),
      new StanzaModel("Work and pray till Jesus calls you,\nHelp to gather in the grain,\nThen with joy you'll meet the Saviour,\nWhen our Lord shall come again.")
    ], "G",
    new ChorusModel("There'll be singing, there'll be shouting,\nThere'll be sorrow, there'll be pain,\nThere'll be weeping, there'll be praying,\nWhen our Lord shall come again.")
  ),

  new HymnModel(21, "THE FIGHT IS ON",
    [
      new StanzaModel("The fight is on, the trumpet sound is ringing out,\nThe cry \"To arms\" is heard afar and near;\nThe Lord of hosts is marching on to victory,\nThe triumph of the right will soon appear."),
      new StanzaModel("The fight is on, arouse ye solders brave and true,\nJehovah leads, and vict'ry will assure;\nGo buckle on the armor God has given you,\nAnd in His strength unto the end endure."),
      new StanzaModel("The Lord is leading on to certain victory,\nThe bow of promise spans the eastern sky;\nHis glorious name in every land shall honored be,\nThe morn will break, the dawn of peace is nigh.")
    ], "C",
    new ChorusModel("The fight is on, O Christian soldiers,\nAnd face to face in stern array,\nWith armor gleaming, and colors streaming,\nThe right and wrong engage today;\nThe fight is on, but be not weary,\nBe strong and in Him might hold fast;\n\
    If God be for us, His banner o'er us,\nWe'll sing the victor's song at last.")
  ),

  new HymnModel(22, "VICTORY IN JESUS",
    [
      new StanzaModel("I heard an old, old story,\nHow a Saviour came from glory,\nHow He gave His life on Calvary\nTo save a wretch like me;\nI heard about His groaning,\nOf His precious blood's atoning,\nThen I repented of my sins\n And won the victory."),
      new StanzaModel("I heard about His healing,\nOf His cleansing pow'r revealing,\nHow He made the lame to walk again\nAnd caused the blind to see;\nAnd then I cried, \"Dear Jesus,\nCome and heal my broken spirit,\"\nAnd somehow Jesus came and brought\nTo me the victory."),
      new StanzaModel("I heard about a mansion\nHe has built for me in glory,\nAnd I heard about the street of gold\nBeyond the crystal sea;\nAbout the angels singing,\nAnd the old redemption story,\nAnd some sweet day I'll sing up there\nThe song of victory.")
    ], "Ab",
    new ChorusModel("O victory in Jesus,\nMy Saviour, forever,\nHe sought me and bought me\nWith His redeeming blood;\nHe loved me ere I knew Him\nAnd all my love is due Him,\nHe plunged me to victory,\nBeneath the cleansing flood.")
  ),

  new HymnModel(23, "MY FAITH LOOKS UP TO THEE",
    [
      new StanzaModel("My faith looks up to Thee,\nThou Lamb of Calvary,\nSaviour divine;\nNow hear me while I pray,\nTake all my sin away,\nO let me from this day\nBe wholly Thine!"),
      new StanzaModel("May Thy rich grace impart\nStrength to my fainting heart,\nMy zeal inspire;\nAs Thou hast died for me,\nO may my love to Thee,\nPure, warm, and changeless be,\nA living fire!"),
      new StanzaModel("While life's dark maze I tread,\nAnd grief's around me spread\nBe Thou my Guide;\nBid darkness turn to day,\nWipe sorrow's tears away,\nNor let me ever stray,\nFrom Thee aside.")
    ], "Eb"
  ),

  new HymnModel(24, "LIVING BY FAITH",
    [
      new StanzaModel("I care not today what the morrow may bring,\nIf shadow or sunshine or rain,\nThe Lord I know ruleth o'er everything,\nAnd all of my worry is vain.\n"),
      new StanzaModel("Though tempest may blow and the storm clouds arise.\nObscuring the brightness of life.\nI'm never alarmed at the overcast skies,\nThe Master looks on at the strife.\n"),
      new StanzaModel("I know that He safely will carry me through,\nNo matter what evils betide.\nWhy should I then care, though the tempest may below,\nIf Jesus walks close to my side."),
      new StanzaModel("Our Lord will return to this earth some sweet day,\nOur troubles will then all be o'er,\nThe Master so gently will lead us away,\nBeyond that blest heavenly shore.")
    ], "Eb",
    new ChorusModel("Living by faith, in Jesus above,\nTrusting, confiding in His great love;\nFrom all harm safe in His sheltering arm.\nI'm living by faith and feel no alarm.")
  ),

  new HymnModel(25, "I SURRENDER ALL",
    [
      new StanzaModel("All to Jesus I surrender,\nAll to Him I freely give;\nI will ever love and trust Him,\nIn His presence daily live."),
      new StanzaModel("All to Jesus I surrender,\nHumbly at His feet I bow,\nWorldly pleasures all forsaken,\nTake me, Jesus, take me now."),
      new StanzaModel("All to Jesus I surrender,\nMake me, Saviour, wholly Thine;\nLet me feel the Holy Spirit.\nTruly know that Thou art mine."),
      new StanzaModel("All to Jesus I surrender,\nLord, I give myself to Thee;\nFill me with Thy love and power,\nLet Thy blessing fall on me."),
      new StanzaModel("All to Jesus I surrender,\nNow I feel the sacred flame;\nOh, the joy of full salvation!\nGlory, glory to His name!")
    ], "Eb",
    new ChorusModel("I surrender all,\nI surrender all,\nAll to Thee, my blessed Saviour.\nI surrender all")
  ),

  new HymnModel(26, "WHEN I REACH THAT CITY",
    [
      new StanzaModel("On the top of Mount Zion is a city\nAnd the earth with glory it doth fill;\nI shall look on its beauty in the morning\nWhen I reach that city on the hill."),
      new StanzaModel("I'm invited to come home to that city,\nFor the Word says, \"Whosoever will,\"\nAnd I'll find there a mansion for me waiting\nWhen I reach that city on the hill."),
      new StanzaModel("Death will never molest me in that city,\nNever leave me lying cold and chill;\nAnd I'll enter to live up there forever\nWhen I reach that city on the hill."),
      new StanzaModel("So, I'll stay here until my Saviour calls me,\nTrying daily to perform His will;\nThen He'll say unto me, \"Well done,\" up yonder\nWhen I reach that city on the hill.")
    ], "Ab",
    new ChorusModel("Oh, that city on Mount Zion,\nTho' a pilgrim yet I love thee still;\nI'll not leave thee, through the ages,\nWhen I reach that city on the hill.")
  ),

  new HymnModel(27, "FARTHER ALONG",
    [
      new StanzaModel("Tempted and tried we're oft made to wonder\nWhy it should be thus all the day long,\nWhile there are others living about us,\nNever molested though in the wrong."),
      new StanzaModel("When death has come and taken our loves ones,\nIt leaves our home so lonely and drear;\nThen do we wonder why others prosper,\nLiving so wicked year after year."),
      new StanzaModel("Faithful till death said our loving Master,\nA few more days to labor and wait;\nToils of the road will then seem as nothing,\nAs we sweep through the beautiful gate."),
      new StanzaModel("When we see Jesus coming in glory,\nWhen He comes from His home in the sky;\nThen we shall meet Him in that bright mansion,\nWe'll understand it all by and by.")
    ], "F",
    new ChorusModel("Farther along we'll know all about it,\nFarther along we'll understand why;\nCheer up, my brother, live in the sunshine,\nWe'll understand it all by and by.")
  ),

  new HymnModel(28, "FILL MY WAY WITH LOVE",
    [
      new StanzaModel("Let me walk, blessed Lord, in the way Thou hast gone,\nLeading straight to the land above;\nGiving cheer everywhere, to the sad and the lone,\nFill my way every day with love."),
      new StanzaModel("Keep me close to the side of my Saviour and Guide,\nLet me never in darkness rove;\nKeep my path free from wrath, and my soul satisfied,\nFill my way every day with love."),
      new StanzaModel("Soon the race will be o'er, and I'll travel no more,\nBut abide in my home above;\nLet me sing, blessed King, all the way to the shore,\nFill my way every day with love.")
    ], "Ab",
    new ChorusModel("Fill my way every day with love,\nAs I walk with the heavenly Dove;\nLet me go all the while, with a song and a smile,\nFill my way every day with love.")
  ),

  new HymnModel(29, "I AM RESOLVED",
    [
      new StanzaModel("I am resolved no longer to linger,\nCharmed by the world's delight;\nThings that are higher, things that are nobler,\nThese have allured my sight."),
      new StanzaModel("I am resolved to go to the Saviour,\nLeaving my sin and strife;\nHe is the true one, He is the just one,\nHe hath the words of life."),
      new StanzaModel("I am resolved to follow the Saviour,\nFaithful and true each day;\nHeed what He sayeth, do what He willeth,\nHe is the living way."),
      new StanzaModel("I am resolved to enter the kingdom,\nLeaving the paths of sin;\nFriends may oppose me, foes may beset me,\nStill will I enter in."),
      new StanzaModel("I am resolved, and who will go with me?\nCome, friends, without delay,\nTaught by the Bible, led by the Spirit,\nWe'll walk the heavenly way.")
    ], "Bb",
    new ChorusModel("I will hasten to Him,\nHasten so glad and free,\nJesus, greatest, highest,\nI will come to Thee.")
  ),

  new HymnModel(30, "HIGHER GROUND",
    [
      new StanzaModel("I'm pressing on the upward way,\nNew heights I'm gaining every day;\nStill praying as I'm onward bound,\n\"Lord, Plant my feet on higher ground.\""),
      new StanzaModel("My heart has no desire to stay\nWhere doubts arise and fears dismay;\nTho' some may dwell where these abound,\nMy prayer, my aim, is higher ground."),
      new StanzaModel("I want to scale the utmost height,\nAnd catch a gleam of glory bright;\nBut still I'll pray till heav'n I've found,\n\"Lord, lead me on to higher ground.\"")
    ], "G",
    new ChorusModel("Lord, lift me up and let me stand,\nBy faith, on heaven's table land,\nA higher plane than I have found;\nLord, plant my feet on higher ground.")
  ),

  new HymnModel(31, "STANDING ON THE PROMISES",
    [
      new StanzaModel("Standing on the promises of Christ my King,\nThrough eternal ages let His praises ring;\nGlory in the highest I will shout and sing,\nStanding on the promises of God."),
      new StanzaModel("Standing on the promises that cannot fail,\nWhen the howling storms of doubt and fear assail,\nBy the living Word of God I shall prevail,\nStanding on the promises of God."),
      new StanzaModel("Standing on the promises I now can see\nPerfect, present cleansing in the blood for me;\nStanding in the liberty where Christ makes free,\nStanding on the promises of God."),
      new StanzaModel("Standing on the promises of Christ the Lord,\nBound to Him eternally by love's strong cord,\nOvercoming daily with the Spirit's sword,\nStanding on the promises of God."),
      new StanzaModel("Standing on the promises I cannot fall,\nList'ning every moment to the Spirit's call,\nResting in my Saviour, as my all in all,\nStanding on the promises of God.")
    ], "Bb",
    new ChorusModel("Standing, standing,\nStanding on the promises of God my Saviour;\nStanding, standing,\nI'm standing on the promises of God.")
  ),

  new HymnModel(32, "BY AND BY, MORNING COMES",
    [
      new StanzaModel("We are often tossed and driven on the restless sea of time,\nSomber skies and howling tempests oft succeed a bright sunshine;\nIn the land of perfect day, when the mists have rolled away,\nWe will understand it better by and by."),
      new StanzaModel("We are often destitute of the things that life demands,\nWant of food and want of shelter, thirsty hills and barren lands;\nBut we're trusting in the Lord, and according to His Word,\nWe will understand it better by and by."),
      new StanzaModel("Trials dark on every hand, and we cannot understand,\nAll the ways that God would lead us to that blessed promised Land;\nBut He guides us with His eye and we'll follow till we die,\nFor we'll understand it better by and by."),
      new StanzaModel("Temptations, hidden snares often take us unawares,\nAnd our hearts are made to bleed for many a thoughtless word or deed,\nAnd we wonder why the test when we try to do our best,\nBut we'll understand it better by and by.")
    ], "F",
    new ChorusModel("By and by when the morning comes,\nWhen all the saints of God are gathered home,\nWe will tell the story how we overcome,\nFor we'll understand it better by and by.")
  ),

  new HymnModel(33, "ROCK OF AGES",
    [
      new StanzaModel("Rock of Ages, cleft for me,\nLet me hide myself in Thee;\nLet the water and the blood,\nFrom Thy wounded side which flowed\nBe of sin the double cure,\nSave from wrath and make me pure."),
      new StanzaModel("Could my tears forever flow,\nCould my zeal no languor know,\nThese for sin could not atone;\nThou must save, and Thou alone;\nIn my hand no price I bring,\nSimply to Thy cross I cling."),
      new StanzaModel("While I draw this fleeting breath,\nWhen my eyes shall close in death,\nWhen I rise to worlds unknown,\nAnd behold Thee on Thy throne,\nRock of Ages, cleft for me,\nLet me hide myself in Thee.")
    ], "Bb"
  ),

  new HymnModel(34, "WHEN I SEE THE BLOOD",
    [
      new StanzaModel("Christ our Redeemer died on the cross,\nDied for the sinner, paid all His due;\nSprinkle your soul with the blood of the Lamb,\nAnd I will pass, will pass over you."),
      new StanzaModel("Chiefest of sinners, Jesus will save;\nAll He has promised, that will He do;\nWash in the fountain opened for sin,\nAnd I will pass, I will pass over you."),
      new StanzaModel("Judgment is coming, all will be there,\nEach one receiving justly his due;\nHide in the saving, sin-cleansing blood,\nAnd I will pass, will pass over you.\n"),
      new StanzaModel("Oh, great compassion! O boundless love!\nO loving kindness, faithful and true!\nFind peace and shelter under the blood,\nAnd I will pass, will pass over you.")
    ], "C",
    new ChorusModel("When I see the blood,\nWhen I see the blood,\nWhen I see the blood,\nI will pass, I will pass over you.")
  ),

  new HymnModel(35, "LOVE LIFTED ME",
    [
      new StanzaModel("I was sinking deep in sin,\nFar from the peaceful shore,\nVery deeply stained within,\nSinking to rise no more;\nBut the Master of the sea\nHeard my despairing cry,\nFrom the waters lifted me,\nNow safe am I."),
      new StanzaModel("All my heart to Him I give,\nEver to Him I'll cling,\nIn His blessed presence live,\nEver His praises sing.\nLove so mighty and so true\nMerits my soul's best songs;\nFaithful, loving service, too,\nTo Him belongs."),
      new StanzaModel("Souls in danger, look above,\nJesus completely saves;\nHe will lift you by His love\nOut of the angry waves.\nHe's the Master of the sea,\nBillows His will obey;\nHe your Saviour wants to be;\nBe saved today.")
    ], "Bb",
    new ChorusModel("Love lifted me! Love lifted me!\nWhen nothing else could help, love lifted me,\nLove lifted me! Love lifted me!\nWhen nothing else could help, love lifted me.")
  ),

  new HymnModel(36, "THERE SHALL BE SHOWERS OF BLESSING",
    [
      new StanzaModel("\“Three shall be showers of blessing,\”\nThis is the promise of love;\nThere shall be seasons refreshing,\nSent from the Saviour above."),
      new StanzaModel("\"There shall be showers blessing,\"\nPrecious reviving again;\nOver the hills and the valleys,\nSound of abundance of rain."),
      new StanzaModel("\"There shall be showers of blessing,\"\nSend them upon us, O Lord;\nGrant to us now a refreshing,\nCome, and now honor Thy Word."),
      new StanzaModel("\"There shall be showers of blessing,\"\nOh, that today they might fall,\nNow as to God we're confessing,\nNow as on Jesus we call!")
    ], "Bb",
    new ChorusModel("Showers of blessing,\nShowers of blessing we need;\nMercy drops round us are falling,\nBut for the showers we plead.")
  ),

  new HymnModel(37, "HAVE THINE OWN WAY, LORD",
    [
      new StanzaModel("Have Thine own way, Lord!\nHave Thine own way!\nThou art the Potter;\nI am the clay,\nMould me and make me\nAfter Thy will,\nWhile I am waiting,\nYielded and still."),
      new StanzaModel("Have Thine own way, Lord!\nHave Thine own way!\nSearch me and try me,\nMaster, today!\nWhiter than snow, Lord,\nWash me just now,\nAs in Thy presence\nHumbly I bow."),
      new StanzaModel("Have Thine own way, Lord!\nHave Thine own way!\nWounded and weary,\nHelp me, I pray!\nPower, all power,\nSurely is Thine!\nTouch me and heal me.\nSaviour divine!"),
      new StanzaModel("Have Thine own way, Lord!\nHave Thine own way!\nHold o'er my being\nAbsolute sway!\nFill with Thy Spirit\nTill all shall see\nChrist only, always,\nLiving in me!")
    ], "Eb"
  ),

  new HymnModel(38, "DRAW ME NEARER",
    [
      new StanzaModel("I am Thine, O Lord I have heard Thy voice,\nAnd it told Thy love to me;\nBut I long to rise in the arms of faith,\nAnd be closer drawn to Thee."),
      new StanzaModel("Consecrate me now to Thy service, Lord,\nBy the pow'r of grace divine;\nLet my soul look up with a steadfast hope,\nAnd my will be lost in Thine."),
      new StanzaModel("Oh, the pure delight of a single hour\nThat before Thy throne I spend,\nWhen I kneel in prayer, and with Thee, my God,\nI commune as friend with friend."),
      new StanzaModel("There are depths of love that I cannot know\nTill I cross the narrow sea,\nThere are heights of joy that I may not reach,\nTill I rest in peace with Thee.")
    ], "Ab",
    new ChorusModel("Draw me nearer, nearer, blessed Lord,\nTo the cross where Thou has died;\nDraw me nearer, nearer, nearer, blessed Lord,\nTo Thy precious, bleeding side.")
  ),

  new HymnModel(39, "I AM MARKED",
    [
      new StanzaModel("I Have lost my reputation since I turned my back on sin,\nAnd a lot of friends went from me, since I let my Saviour in;\nNow they pass me by unknown, when they once passed with a smile;\nNow they say I'm very foolish, and they say I'm out of style."),
      new StanzaModel("Well, they say my life is ruined, and my talent thrown away,\nAnd they cannot understand it, for I had such plans one day;\nBut I know what I surrendered when I\npromised I'd go through;\nAnd I gained far more glory since God made me over new.")
    ], "Ab",
    new ChorusModel("I am marked, marked, marked,\nI am marked, now wherever I go;\nI am marked, marked, marked,\nJust what I am everyone seems to know.\nI am sealed, sealed, sealed,\nI am sealed by His Spirit Divine;\nO glory to God! Hallelujah! Amen!\nI am His, and I know He is mine.")
  ),

  new HymnModel(40, "WON’T IT BE WONDERFUL THERE?",
    [
      new StanzaModel("When with the Saviour we enter the gloryland,\nWon't it be wonderful there?\nEnded the troubles and cares of the storyland,\nWon't it be wonderful there?"),
      new StanzaModel("Walking and talking with Christ, the supernal One,\nWon't it be wonderful there?\nPraising, adoring the matchless eternal One,\nWon't it be wonderful there?"),
      new StanzaModel("There where the tempest will never be sweeping us,\nWon't it be wonderful there?\nSure that forever the Lord will be keeping us,\nWon't it be wonderful there?")
    ], "Bb",
    new ChorusModel("Won't it be wonderful there,\nHaving no burdens to bear?\nJoyously singing with heart-bells all ringing,\nO won't it be wonderful there?")
  ),

  new HymnModel(41, "WINGS OF A DOVE",
    [
      new StanzaModel("Noah had drifted\nOn the floods many days,\nHe searched for land\nIn various ways;\nTroubles he had some,\nBut not from above,\nGod gave him His sign\nOn the wings of a dove."),
      new StanzaModel("Jesus, our Saviour\nCame to earth one day;\nHe was born in a stable,\nIn a manger of hay;\nThough here rejected,\nBut not from above,\nGod gave us His sign\nOn the wings of a dove."),
      new StanzaModel("Though I have suffered\nIn many a way,\nI cried for healing\nBoth night and day;\nFaith wasn't forgotten\nBy the Father above,\nHe gave me His sign\nOn the wings of a dove.")
    ], "Eb",
    new ChorusModel("On the wings of a snow-white dove,\nGod sends down His pure, sweet love,\nA sign from above,\nOn the wings of dove.")
  ),

  new HymnModel(42, "I FEEL LIKE TRAVELING ON",
    [
      new StanzaModel("My Heavenly home is bright and fair,\nI feel like traveling on,\nNor pain, nor death can enter there,\nI feel like traveling on."),
      new StanzaModel("Its glittering towers the sun outshine,\nI feel like traveling on;\nThat heavenly mansion shall be mine,\nI feel like traveling on."),
      new StanzaModel("Let others seek a home below,\nI feel like traveling on;\nWhich flames devour, or waves o'erflow,\nI feel like traveling on."),
      new StanzaModel("The Lord has been so good to me,\nI feel like traveling on;\nUntil that blessed home I see,\nI feel like traveling on.")
    ], "G",
    new ChorusModel("Yes, I feel like traveling on,\nI feel like traveling on;\nMy heavenly home is bright and fair,\nI feel like traveling on.")
  ),

  new HymnModel(43, "COME AND DINE",
    [
      new StanzaModel("Jesus has a table spread\nWhere the saints of God are fed,\nHe invites His chosen people \“Come and dine\”\nWith His manna He doth feed\nAnd supplies our every need;\nO, 'tis sweet to sup with Jesus all the time!"),
      new StanzaModel("The disciples came to land,\nThus obeying Christ's command,\nFor the Master called to them, \"Come and dine;\"\nThere they found their hearts' desire,\nBread and fish upon the fire;\nThus He Satisfies the hungry every time."),
      new StanzaModel("Soon the Lamb will take His bride\nTo be ever at His side,\nAll the host of heaven will assembled be:\nO, 'twill be a glorious sight,\nAll the saints in spotless white;\nAnd with Jesus they will feast eternally.")
    ], "C",
    new ChorusModel("\"Come and dine,\" the Master calleth,\n\"Come and dine,\"\nYou may feast at Jesus' table all the time;\nHe who fed the multitude, turned the water into wine,\nTo the hungry calleth now, \"Come and dine.\"")
  ),

  new HymnModel(44, "GOD LEADS US ALONG",
    [
      new StanzaModel("In shady, green pastures, so rich and so sweet,\nGod leads His dear children along;\nWhere the water's cool flow bathes the weary one's feet,\nGod leads His dear children along."),
      new StanzaModel("Sometimes on the mount where the sun shines so bright,\nGod leads His dear children along;\nSometimes in the valley in the darkest of night,\nGod leads His dear children along."),
      new StanzaModel("Tho' sorrow befall us, and Satan oppose,\nGod leads His dear children along;\nThrough grace we can conquer, defeat all our foes,\nGod leads His dear children along."),
      new StanzaModel("Away from the mire, and away from the clay,\nGod leads His dear children along;\nAway up in glory, eternity's day,\nGod leads His dear children along")
    ], "Eb",
    new ChorusModel("Some through the waters, some through the flood,\nSome through the fire, but all through the Blood;\nSome though great sorrow, but God gives a song,\nIn the night season and all the day long.")
  ),

  new HymnModel(45, "LEANING ON THE EVERLASTING ARMS",
    [
      new StanzaModel("What a fellowship, what a joy divine,\nLeaning on the everlasting arms;\nWhat a blessedness, what a peace is mine\nLeaning on the everlasting arms."),
      new StanzaModel("Leaning, leaning,\nSafe and secure from all alarms;\nLeaning, leaning, leaning on the everlasting arms."),
      new StanzaModel("Oh, how sweet to walk in this pilgrim way,\nLeaning on the everlasting arms;\nOh, how bright the path grows from day to day,\nLeaning on the everlasting arms."),
      new StanzaModel("What have I to dread, what have I to fear,\nLeaning on the everlasting arms;\nI have blessed peace with my Lord so near,\nLeaning go the everlasting arms.")
    ], "Eb",
    new ChorusModel("Leaning, leaning,\nSafe and secure from all alarms;\nLeaning, leaning,\nLeaning on the everlasting arms.")
  )
]
